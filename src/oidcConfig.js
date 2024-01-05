import { UserManager } from 'oidc-client';

const config = {
    authority: "https://pharma-release.server247.info/sso",
    client_id: "PharmaReleaseManager_App",
    redirect_uri: "http://localhost:4200/callback",
    response_type: "code",
    scope: "openid profile email",
    post_logout_redirect_uri: "http://localhost:4200",
};

const userManager = new UserManager(config);

export default userManager;