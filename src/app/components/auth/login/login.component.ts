import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  passwordVisiblConfirm = false;
  validateForm: FormGroup;
  loading = false;
  verifyEmailId: any = null;
  authIntr;

  success = 2;

  deviceAuth = false;
  formValues = {};
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.verifyEmailId = this.route.snapshot.paramMap.get("id");
    // if (this.verifyEmailId) {
    //   this.verifyMail(this.verifyEmailId);
    // }
    if (this.authService.LoggedIn()) {
      if (localStorage.getItem("remember") == "true") {
        this.router.navigate(["/dashboard"]);
      } else {
        localStorage.clear();
      }
    }

    this.validateForm = this.fb.group({
      emailAddress: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [false],
      otp: [null, [Validators.minLength(6), Validators.maxLength(6), Validators.pattern('([0-9]{6,6})')]]
    });
  }

  ngOnDestroy() {
    if (this.authIntr) {
      clearInterval(this.authIntr);
    }
  }

  // verifyMail(id) {
  //   this.authService.verifyMail(id).subscribe(data => {
  //     if (data["success"]) {
  //       this.message.success(data["message"]);
  //     } else {
  //       this.message.error(data["message"]);
  //     }
  //   });
  // }

  login() {
    if (this.validateForm.status == "VALID" && this.validateForm.touched) {
      const loginParams: any = {
        email: this.validateForm.value.emailAddress,
        password: this.validateForm.value.password,
        otp: this.validateForm.value.otp
      };
      this.loading = true;
      this.authService.Login(loginParams).subscribe((data: any) => {
        if (data["success"]) {
          this.SetData(data);
        } else {
          if (data.g2f) {
            this.validateForm.controls.otp.setErrors({ g2f: true });
          }
          this.loading = false;
          this.message.error(data["message"]);
        }
      });
    }


  }

  SetData(data) {
    this.deviceAuth = false;
    this.validateForm.value.remember
      ? localStorage.setItem("remember", "true")
      : localStorage.setItem("remember", "false");
    this.message.success(`Logged in successfully !`);
    localStorage.setItem("isLoggedIn", "active");
    localStorage.setItem("userId", data["res"]["_id"]);
    localStorage.setItem("auth_token", data["access_token"]);
    localStorage.setItem("userName", data["res"]["userName"]);
    localStorage.setItem("userEmail", data["res"]["email"]);
    localStorage.setItem("g2fStatus", data["res"]["g2fStatus"]);
    localStorage.setItem("login", data["login"]);
    localStorage.setItem("ip", data["ip"]);
    this.loading = false;
    this.router.navigate(["/dashboard"]);

  }

}
