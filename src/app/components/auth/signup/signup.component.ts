import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent {
  passwordVisibleConfirmNew = false;
  passwordVisibleConfirm = false;
  validateForm: FormGroup;
  loading = false;
  success = false;
  refId = null;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get("id"))
      this.refId = this.route.snapshot.paramMap.get("id");

    this.validateForm = this.fb.group({
      fullName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^([a-zA-z\s]{3,20})$')]],
      emailAddress: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.pattern('([0-9]{8,12})')]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\/])(?=.{8,})/)]],
      confirmpassword: [null, [Validators.required, this.confirmValidator]],
      agree: [false, Validators.requiredTrue]
    });
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  confirmValidator2 = () => {
    if (this.validateForm.controls.confirmpassword.value != '' && this.validateForm.controls.confirmpassword.value !== this.validateForm.controls.password.value) {
      this.validateForm.controls.confirmpassword.setErrors({ confirm: true, error: true });
      return;
    }
    this.validateForm.controls.confirmpassword.setErrors(null);
  };


  SignUp() {

    if (this.validateForm.status == 'VALID' && this.validateForm.touched) {
      const msgId = this.message.loading('Creating account...').messageId;


      const UserParams: any = {
        userName: this.validateForm.value.fullName,
        password: this.validateForm.value.password,
        email: this.validateForm.value.emailAddress,
        mobileNum: this.validateForm.value.phoneNumber,
      }
      this.loading = true;
      this.authService.SignUp(UserParams).subscribe(data => {
        this.message.remove(msgId);
        if (data['success']) {
          this.message.success(`Account created successfully !`);
          this.loading = false;
          this.validateForm.reset();
          this.success = true;
          // this.router.navigate(['/auth/login']);
        } else {
          this.loading = false;
          this.message.error(data['message']);
        }
      });
    }
  }
}
