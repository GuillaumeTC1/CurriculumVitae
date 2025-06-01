import { Page } from "@/components/page/Page";

const PrivacyPage = () => {

    return (
        <Page title="Privacy">
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date:</strong> 01/01/2025</p>

            <p>Welcome to <strong>gtc-net.fr</strong>. This is a personal website maintained by an individual and is committed to respecting your privacy. This Privacy Policy explains how your information is handled when you log in using LinkedIn.</p>

            <h2>1. Information Collected</h2>
            <p>This website uses <strong>LinkedIn authentication</strong> to allow users to log in. When you log in via LinkedIn, the following limited data is collected:</p>
            <ul>
                <li>Your LinkedIn public profile ID or name</li>
                <li>Your LinkedIn email address</li>
                <li>Authentication timestamps (login and logout)</li>
                <li>IP address (used for security purposes)</li>
            </ul>
            <p>No additional personal data is collected from your LinkedIn profile, and no tracking of browsing activity is performed.</p>

            <h2>2. How Your Information Is Used</h2>
            <p>The collected information is used exclusively for:</p>
            <ul>
                <li>Authenticating your identity via LinkedIn</li>
                <li>Granting access to protected areas of the website</li>
                <li>Ensuring website security and preventing unauthorized access</li>
                <li>Maintaining logs for security auditing</li>
            </ul>

            <h2>3. Data Sharing and Disclosure</h2>
            <p>Your information is <strong>not sold, shared, or disclosed</strong> to any third parties. Access to this data is restricted to the website owner and is only used for the purposes listed above.</p>

            <h2>4. Data Retention</h2>
            <p>Authentication logs are kept for a limited period for security and troubleshooting. These logs are automatically deleted after <strong>90 days</strong>, unless required for legitimate security reasons.</p>

            <h2>5. Security</h2>
            <p>The website uses appropriate technical measures to protect the security and confidentiality of your LinkedIn authentication data. All data is stored securely and is protected from unauthorized access.</p>

            <h2>6. Your Rights</h2>
            <p>Since this is a personal site based in France, it complies with the <strong>General Data Protection Regulation (GDPR)</strong>. You have the right to:</p>
            <ul>
                <li>Request access to the data stored about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw your consent to data processing at any time</li>
            </ul>
            <p>For any inquiries, requests, or concerns, please contact me at: <a href="mailto:gcastelnau@laposte.net">gcastelnau@laposte.net</a></p>

            <h2>Changes to This Privacy Policy</h2>
            <p>This policy may be updated occasionally to reflect changes in technology, law, or website functionality. Any updates will be posted on this page with a new effective date.</p>
        </Page>
    );
}

export default PrivacyPage;