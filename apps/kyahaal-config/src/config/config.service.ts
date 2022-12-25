import { Injectable } from '@nestjs/common';
import {
  FormSubmissionMeta_Method,
  FormValidatorType,
  Response,
} from './protos/config.pb';

@Injectable()
export class ConfigService {
  async getAppConfig(): Promise<Response> {
    return {
      form: {
        login: {
          title: 'Login',
          subtitle: "Don't have an account? ",
          subtitleCTAText: 'Register',
          subtitleCTATLink: '/auth/signup',
          primaryCTAText: 'Login',
          secondaryCTAText: 'Forgot Password?',
          formSubmissionMeta: {
            url: '/auth/login',
            method: FormSubmissionMeta_Method.POST,
          },
          fields: [
            {
              inputType: 'email',
              label: 'Email',
              autofocus: true,
              bottomGutter: true,
              identifier: 'email',
              validator: {
                validatorType: FormValidatorType.REGEX,
                regExp: [
                  {
                    regExp:
                      '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                    error: 'Please enter a valid email',
                  },
                ],
              },
            },
            {
              inputType: 'password',
              label: 'Password',
              identifier: 'password',
              validator: {
                validatorType: FormValidatorType.NONE,
                regExp: [],
              },
            },
          ],
        },
        signup: {
          title: 'Register',
          subtitle: 'Already have a account? ',
          subtitleCTAText: 'Login',
          subtitleCTATLink: '/auth/login',
          primaryCTAText: 'Register',
          formSubmissionMeta: {
            url: '/auth/register',
            method: FormSubmissionMeta_Method.POST,
          },
          fields: [
            {
              inputType: 'username',
              label: 'Username',
              identifier: 'username',
              autofocus: true,
              bottomGutter: true,
              validator: {
                validatorType: FormValidatorType.NONE,
                regExp: [],
              },
            },
            {
              inputType: 'email',
              label: 'Email',
              identifier: 'email',
              bottomGutter: true,
              validator: {
                validatorType: FormValidatorType.REGEX,
                regExp: [
                  {
                    regExp:
                      '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                    error: 'Please enter a valid email',
                  },
                ],
              },
            },
            {
              inputType: 'password',
              label: 'Password',
              identifier: 'password',
              validator: {
                validatorType: FormValidatorType.REGEX,
                regExp: [
                  {
                    regExp: '^.{8,}$',
                    error: 'Password must be at least 8 characters long',
                  },
                  {
                    regExp: '(?=.*[a-z])',
                    error:
                      'Password should contain at least one lower case letter',
                  },
                  {
                    regExp: '(?=.*[A-Z])',
                    error:
                      'Password should contain at least one upper case letter',
                  },
                  {
                    regExp: '(?=.*[0-9])',
                    error: 'Password should contain at least one number',
                  },
                  {
                    regExp: '(?=.*[!@#\\$%\\^&\\*?,.()|<>{}\\[\\]_|])',
                    error:
                      'Password should contain at least one special character',
                  },
                ],
              },
            },
          ],
        },
      },
    };
  }
}
