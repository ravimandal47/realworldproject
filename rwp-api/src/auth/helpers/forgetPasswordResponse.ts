export class ForgotPasswordResponse {
    success: boolean;
    resetUrl?: string;
    resetEmail?: string;
    resetToken?: string;
    error?: string;
}

export class VerifyResetToken {
    verified: boolean;
    error?: string;
}