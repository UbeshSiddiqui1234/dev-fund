
const AboutPage = () => {
    return (
        <section className="max-w-4xl mx-auto p-8 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>
            
            <h2 className="text-2xl font-semibold mb-4">Empowering Creators, Celebrating Passion</h2>
            <p className="mb-4">
                Welcome to DevFund, a platform dedicated to empowering creators and celebrating passion. 
                We believe that creativity knows no bounds, and we're here to support you on your journey to share your talents with the world.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
                At DevFund, our mission is to provide creators with the tools and resources they need to build sustainable careers. 
                Whether you're an artist, writer, musician, podcaster, or any type of creative, we're committed to helping you turn your passion into a thriving community.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <ol className="list-decimal list-inside mb-4">
                <li><span className="font-bold">Create Your Profile:</span> Set up your profile and showcase your work. Let your audience know what you're all about.</li>
                <li><span className="font-bold">Build Your Community:</span> Connect with fans who share your passion and appreciate your talent. Our platform makes it easy to engage with your supporters.</li>
                <li><span className="font-bold">Receive Support:</span> Offer exclusive content, behind-the-scenes access, and special perks to your subscribers. In return, they can support you through monthly memberships or one-time contributions.</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside mb-4">
                <li><span className="font-bold">Creator-Centric:</span> Our platform is designed with creators in mind. We offer a range of features to help you manage your content, engage with your community, and grow your audience.</li>
                <li><span className="font-bold">Flexible Funding:</span> Choose how you want to receive support, whether it's through memberships, tips, or exclusive content sales.</li>
                <li><span className="font-bold">Community Focus:</span> Join a vibrant community of like-minded creators and supporters. Collaborate, share ideas, and grow together.</li>
                <li><span className="font-bold">Secure and Transparent:</span> We prioritize your security and transparency. Our payment system is safe and reliable, ensuring you receive your earnings promptly.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Join Us Today</h2>
            <p className="mb-4">
                Ready to take your creative journey to the next level? Join DevFund today and start building a community that supports and celebrates your work. Together, we can make your passion a sustainable reality.
            </p>
            
            <p>Thank you for choosing DevFund. We can't wait to see what you'll create!</p>
        </section>
    );
};

export default AboutPage;

export const metadata = {
    title: 'About - DevFund'
}
