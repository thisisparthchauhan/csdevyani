import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | CSDEVYANI',
    description: 'Terms of Service for CSDEVYANI. Rules and regulations for using our website and services.',
};

export default function TermsOfService() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
                <p className="text-slate-600 mb-8">Last Updated: January 2026</p>

                <div className="prose prose-slate max-w-none">
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                    <h3>2. Use of Services</h3>
                    <p>Our services are intended for corporate compliance and legal advisory. You agree to use these services only for lawful purposes.</p>

                    <h3>3. Intellectual Property</h3>
                    <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights.</p>

                    <h3>4. Limitation of Liability</h3>
                    <p>In no event will we be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use the materials on this site.</p>

                    <h3>5. Governing Law</h3>
                    <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                </div>
            </div>
        </div>
    );
}
