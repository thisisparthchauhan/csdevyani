import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | CSDEVYANI',
    description: 'Privacy Policy for CSDEVYANI. Detailed information on how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                <p className="text-slate-600 mb-8">Last Updated: January 2026</p>

                <div className="prose prose-slate max-w-none">
                    <h3>1. Introduction</h3>
                    <p>Welcome to CSDEVYANI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner.</p>

                    <h3>2. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you fill out a form, request a consultation, or communicate with us via third-party platforms (like WhatsApp).</p>
                    <ul>
                        <li>Personal Identification Information (Name, email address, phone number, etc.)</li>
                        <li>Business Information (Company details, compliance needs)</li>
                    </ul>

                    <h3>3. How We Use Your Information</h3>
                    <p>We use the information we collect to provide, maintain, and improve our services, including:</p>
                    <ul>
                        <li>Responding to your inquiries and support needs.</li>
                        <li>Sending you technical notices, updates, and administrative messages.</li>
                        <li>Providing legal and compliance services as requested.</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

                    <h3>5. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@csdevyani.com" className="text-cyan-600">support@csdevyani.com</a>.</p>
                </div>
            </div>
        </div>
    );
}
