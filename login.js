export const forgotPasswordErrorsMessage = {
	ExpiredLink: { _warning: 'forgot_password.expired_link' },
	ExpiredData: { _warning: 'forgot_password.expired_data' },
	PassResetOk: { _success: 'forgot_password.pass_reset_ok' },
	BlockedAccount: { _error: <FormattedMessageMarkdown id="forgot_password.blocked_account_MD" /> },
	MaxAttemptsSecQuestion: { _error: 'forgot_password.max_attempts_sec_question' },
}

// BEFORE: /home/junior/projects/doppler-webapp/src/components/Login/Login.js
function getForgotErrorMessage(location) {
    let parsedQuery = location && location.search && queryString.parse(location.search);
    parsedQuery = (parsedQuery && parsedQuery['message']) || null;
    switch (parsedQuery) {
      case 'ExpiredLink':
        return { _warning: 'forgot_password.expired_link' };
      case 'ExpiredData':
        return { _warning: 'forgot_password.expired_data' };
      case 'PassResetOk':
        return { _success: 'forgot_password.pass_reset_ok' };
      case 'BlockedAccount':
        return { _error: <FormattedMessageMarkdown id="forgot_password.blocked_account_MD" /> };
      case 'MaxAttemptsSecQuestion':
        return { _error: 'forgot_password.max_attempts_sec_question' };
      default:
        return null;
    }
}

// AFTER
function getForgotErrorMessage(location) {
    let parsedQuery = location?.search && queryString.parse(location.search);
    return forgotPasswordErrorsMessage[parsedQuery?.message] || null;
}