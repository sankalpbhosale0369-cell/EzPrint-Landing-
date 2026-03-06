import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Printer, Smartphone, CreditCard, FileText } from "lucide-react";
import Logo from "@/components/ui/Logo";

const Index = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const features = [
    {
      icon: <FileText className="h-8 w-8 text-primary mb-4" />,
      title: "Easy File Upload",
      description: "Upload documents in multiple formats including PDF, DOCX, PPT, and images.",
    },
    {
      icon: <Printer className="h-8 w-8 text-primary mb-4" />,
      title: "Customizable Printing",
      description: "Choose from a range of print settings for color, orientation, and more.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary mb-4" />,
      title: "Real-time Tracking",
      description: "Monitor the progress of your print job from start to completion.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary mb-4" />,
      title: "Seamless Payments",
      description: "Pay easily using UPI, credit/debit cards, or digital wallets.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</a>
            <Button variant="outline" asChild>
              <a href="/downloads/EzPrint-Setup.exe" download>
                Download for Windows
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <motion.div
          className="container mx-auto text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Revolutionizing Print Services
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Print Documents <br className="hidden md:block" />
            <span className="text-primary">Without the Hassle</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Upload, preview, and print your documents from anywhere. Track your print jobs in real-time and pick them up when they're ready.
          </p>
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href="/downloads/EzPrint-Setup.exe" download>
                  Download for Windows <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Compatible with Windows 10 and Windows 11
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose EzPrint?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers a seamless printing experience with features designed to save you time and eliminate frustration.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl border border-border text-center"
                variants={itemVariants}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting your documents printed is as easy as 1-2-3. Follow these simple steps:
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              className="flex-1 p-8 rounded-xl glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6">1</div>
              <h3 className="text-xl font-semibold mb-3">Upload Your Document</h3>
              <p className="text-muted-foreground mb-4">
                Select and upload your document in any supported format. Configure your print settings just the way you want.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 p-8 rounded-xl glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6">2</div>
              <h3 className="text-xl font-semibold mb-3">Preview & Pay</h3>
              <p className="text-muted-foreground mb-4">
                Review your document in our real-time preview. Pay securely using your preferred payment method.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 p-8 rounded-xl glass-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6">3</div>
              <h3 className="text-xl font-semibold mb-3">Track & Collect</h3>
              <p className="text-muted-foreground mb-4">
                Monitor the progress of your print job in real-time. Collect your prints once they're ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Hassle-Free Printing?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Start using EzPrint today and enjoy a seamless printing experience. No more waiting in line or dealing with complex printer setups.
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                asChild
              >
                <a href="/downloads/EzPrint-Setup.exe" download>
                  Download for Windows
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Compatible with Windows 10 and Windows 11
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo />
            <nav className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EzPrint. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
