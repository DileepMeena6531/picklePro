import React, { useState } from 'react';

// Import images
import singleBall from "../src/assets/single ball.jpg"
import sixBall from "../src/assets/sixBalls.jpg"
import fiftyBall from "../src/assets/groupBalls.webp"
import hundredBall from "../src/assets/hundredBalls.jpg"

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [form, setForm] = useState({ name: '', email: '', message: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
      setForm({ name: '', email: '', message: '', phone: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  // Navbar Component
  const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#2c5530' }}>
      <div className="container">
        <button 
          className="navbar-brand btn btn-link text-white fw-bold fs-3 text-decoration-none p-0 border-0"
          onClick={() => setCurrentPage('home')}
        >
          🏓 PicklePro India
        </button>
        
        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
          <button 
            className={`btn btn-link text-white text-decoration-none fw-semibold ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={`btn btn-link text-white text-decoration-none fw-semibold ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => setCurrentPage('products')}
          >
            Products
          </button>
          <button 
            className={`btn btn-link text-white text-decoration-none fw-semibold ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );

  // Home Component
  const Home = () => (
    <div>
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ 
          background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%) !important',
          backgroundImage: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
          backgroundColor: '#2c5530',
          color: 'white',
          padding: '80px 0',
          minHeight: '400px'
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Welcome to PicklePro India</h1>
          <p className="lead fs-4 mb-4">India's Premier Pickleball Equipment Manufacturer</p>
          <p className="fs-5 mb-5">Experience the fastest-growing sport with premium quality balls designed for Indian courts</p>
          <button 
            className="btn btn-light btn-lg px-5 py-3 fw-semibold"
            onClick={() => setCurrentPage('products')}
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="container my-5">
        {/* What is Pickleball Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold text-success mb-4">What is Pickleball?</h2>
            <p className="fs-5 mb-3">
              Pickleball is a sport derived from tennis, badminton, and ping-pong, combining the best elements of all three sports.
            </p>
            <p className="mb-3">
              Invented in 1965 by Joel Pritchard, Bill Bell, and Barney McCallum at Bainbridge Island, Washington, 
              it has become one of the fastest-growing sports in America and is now gaining massive popularity in India.
            </p>
            <p className="mb-4">
              The game is played with paddles and a perforated plastic ball on a court similar to badminton, 
              making it accessible for players of all ages and skill levels.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded p-4 text-center">
              <h3 className="text-success mb-3">Quick Facts</h3>
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="border rounded p-3">
                    <h4 className="text-primary">🏸</h4>
                    <small className="fw-semibold">Court Size</small>
                    <p className="mb-0">20×44 feet</p>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border rounded p-3">
                    <h4 className="text-primary">🏓</h4>
                    <small className="fw-semibold">Equipment</small>
                    <p className="mb-0">Paddle & Ball</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded p-3">
                    <h4 className="text-primary">👥</h4>
                    <small className="fw-semibold">Players</small>
                    <p className="mb-0">2 or 4 players</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded p-3">
                    <h4 className="text-primary">⚡</h4>
                    <small className="fw-semibold">Game Style</small>
                    <p className="mb-0">Fast & Fun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Made in India Section */}
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <h2 className="display-6 fw-bold mb-4" style={{ color: '#ff6b35' }}>
              🇮🇳 Made in India for India
            </h2>
            <p className="fs-5 mb-3">
              Your only homegrown sports equipment manufacturer specializing in pickleball.
            </p>
            <p className="mb-3">
              We understand the unique playing conditions in India - from humid coastal regions to dry northern plains. 
              Our balls are specially designed and tested for Indian weather conditions.
            </p>
            <div className="bg-warning bg-opacity-10 rounded p-4 mb-4">
              <h5 className="fw-bold text-warning-emphasis">Why Choose PicklePro India?</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">✅ Designed for Indian climate conditions</li>
                <li className="mb-2">✅ Premium quality at affordable prices</li>
                <li className="mb-2">✅ Supporting local manufacturing</li>
                <li className="mb-2">✅ Fast delivery across India</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="bg-success bg-opacity-10 rounded p-5 text-center">
              <h3 className="text-success mb-4">🏆 Quality Promise</h3>
              <p className="mb-3">Every ball is tested for:</p>
              <div className="row text-center">
                <div className="col-6 mb-3">
                  <div className="p-3">
                    <h5 className="text-success">Durability</h5>
                    <small>Long-lasting performance</small>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="p-3">
                    <h5 className="text-success">Bounce</h5>
                    <small>Consistent ball behavior</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3">
                    <h5 className="text-success">Weather</h5>
                    <small>All-season performance</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3">
                    <h5 className="text-success">Standards</h5>
                    <small>Tournament approved</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Products Component
  const Products = () => {
    const categories = [
      { 
        title: 'Single Ball', 
        qty: 1, 
        price: '₹100',
        originalPrice: '₹120',
        description: 'Perfect for beginners or replacing a lost ball',
        features: ['Indoor/Outdoor use', 'Tournament grade', '40-hole design'],
        badge: 'Starter',
        image: singleBall // Single ball image
      },
      { 
        title: '6-Pack Balls', 
        qty: 6, 
        price: '₹592',
        originalPrice: '₹720',
        description: 'Most popular choice for regular players and clubs',
        features: ['Best value pack', 'Club favorite', 'Bulk discount'],
        badge: 'Popular',
        image: sixBall // Six balls image
      },
      { 
        title: 'Bulk 50-Pack', 
        qty: 50, 
        price: '₹4,750',
        originalPrice: '₹6,000',
        description: 'Perfect for tournaments and training academies',
        features: ['Tournament pack', 'Academy choice', '21% savings'],
        badge: 'Tournament',
        image: fiftyBall // Fifty balls image
      },
      { 
        title: 'Bulk 100-Pack', 
        qty: 100, 
        price: '₹9,000',
        originalPrice: '₹12,000',
        description: 'Ultimate bulk pack for serious organizations',
        features: ['Maximum savings', 'Organization pack', '25% discount'],
        badge: 'Wholesale',
        image: hundredBall // Hundred balls image
      }
    ];

    return (
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-success mb-3">Our Premium Pickleball Collection</h2>
          <p className="lead">High-quality balls designed for Indian playing conditions</p>
          <div className="bg-light rounded p-4 d-inline-block">
            <h5 className="mb-2">🏸 Indoor vs Outdoor Balls</h5>
            <p className="mb-0 small">
              <strong>Indoor:</strong> Thinner plastic, 26 larger holes | 
              <strong> Outdoor:</strong> Thicker plastic, 40 smaller holes for wind resistance
            </p>
          </div>
        </div>

        <div className="row">
          {categories.map((product, index) => (
            <div key={product.title} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0 position-relative">
                {/* Badge */}
                <div className="position-absolute top-0 start-0 m-2">
                  <span className={`badge ${
                    product.badge === 'Popular' ? 'bg-success' : 
                    product.badge === 'Tournament' ? 'bg-primary' :
                    product.badge === 'Wholesale' ? 'bg-danger' : 'bg-secondary'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="card-img-top d-flex align-items-center justify-content-center p-3" 
                     style={{ 
                       height: '200px',
                       background: `linear-gradient(135deg, ${
                         index % 4 === 0 ? '#e3f2fd, #1976d2' :
                         index % 4 === 1 ? '#f3e5f5, #7b1fa2' :
                         index % 4 === 2 ? '#fff3e0, #f57c00' : '#e8f5e8, #388e3c'
                       })`
                     }}>
                  <div className="text-center">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      style={{
                        maxHeight: '150px',
                        maxWidth: '150px',
                        objectFit: 'contain',
                        borderRadius: '8px'
                      }}
                    />
                    <p className="mb-0 fw-bold text-white mt-2">{product.qty} Ball{product.qty > 1 ? 's' : ''}</p>
                  </div>
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{product.title}</h5>
                  <p className="card-text text-muted small mb-3">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-3">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="badge bg-light text-dark border me-1 mb-1 small">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mt-auto">
                    <div className="d-flex align-items-center mb-3">
                      <span className="h4 mb-0 text-success fw-bold">{product.price}</span>
                      <span className="text-muted text-decoration-line-through ms-2">{product.originalPrice}</span>
                    </div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-success fw-semibold">
                        Add to Cart
                      </button>
                      <button className="btn btn-outline-success btn-sm">
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-light rounded p-4">
              <h4 className="text-center mb-4">🏆 Why Our Balls Are Different</h4>
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <div className="p-3">
                    <h5 className="text-primary">🌡️ Climate Tested</h5>
                    <p className="small mb-0">Tested in temperatures from 15°C to 45°C across India</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="p-3">
                    <h5 className="text-success">✅ Tournament Grade</h5>
                    <p className="small mb-0">Approved for official tournaments and competitions</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="p-3">
                    <h5 className="text-warning">🔄 Consistent Bounce</h5>
                    <p className="small mb-0">Engineered for predictable ball behavior every time</p>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="p-3">
                    <h5 className="text-info">💪 Durable Design</h5>
                    <p className="small mb-0">Reinforced construction for extended play sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Contact Component
  const Contact = () => (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-success mb-3">Get in Touch</h2>
            <p className="lead">Have questions about our products? We're here to help!</p>
          </div>
          
          <div className="card shadow border-0">
            <div className="card-body p-5">
              <div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control form-control-lg border-2" 
                      value={form.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control form-control-lg border-2" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="form-control form-control-lg border-2" 
                    value={form.phone} 
                    onChange={handleChange} 
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-semibold">Message *</label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    className="form-control form-control-lg border-2" 
                    value={form.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Tell us about your requirements, bulk orders, or any questions..."
                  />
                </div>
                
                <div className="d-grid">
                  <button 
                    type="button" 
                    className="btn btn-success btn-lg fw-semibold py-3"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message 📧'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="row mt-5">
            <div className="col-md-4 text-center mb-4">
              <div className="bg-light rounded p-4">
                <h4 className="text-primary">📞 Call Us</h4>
                <p className="mb-0">+91-7891576498</p>
                <small className="text-muted">Mon-Sat, 9 AM - 6 PM</small>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="bg-light rounded p-4">
                <h4 className="text-success">📧 Email Us</h4>
                <p className="mb-0">2003dileepmeena@gmail.com</p>
                <small className="text-muted">24/7 Support</small>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="bg-light rounded p-4">
                <h4 className="text-warning">📍 Visit Us</h4>
                <p className="mb-0">Chennai, Tamil Nadu</p>
                <small className="text-muted">By appointment only</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-dark text-white mt-auto">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">🏓 PicklePro India</h5>
            <p className="text-light">
              India's leading manufacturer of premium pickleball equipment. 
              Made in India for Indian playing conditions.
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-light btn-sm">Facebook</button>
              <button className="btn btn-outline-light btn-sm">Instagram</button>
              <button className="btn btn-outline-light btn-sm">Twitter</button>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Products</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0" 
                        onClick={() => setCurrentPage('products')}>
                  Single Balls
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0"
                        onClick={() => setCurrentPage('products')}>
                  6-Pack
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0"
                        onClick={() => setCurrentPage('products')}>
                  Bulk Orders
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0"
                        onClick={() => setCurrentPage('products')}>
                  Accessories
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0"
                        onClick={() => setCurrentPage('contact')}>
                  Contact Us
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0">
                  Shipping Info
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0">
                  Returns
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-link text-light text-decoration-none p-0 border-0">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-light">Stay updated with new products and pickleball tips!</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email address"
              />
              <button className="btn btn-success" type="button">Subscribe</button>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; {new Date().getFullYear()} PicklePro India. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <small>
              Made with ❤️ in India | Privacy Policy | Terms of Service
            </small>
          </div>
        </div>
      </div>
    </footer>
  );

  // Render current page
  const renderPage = () => {
    switch(currentPage) {
      case 'products': return <Products />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      {/* Custom CSS */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%) !important;
          background-image: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%) !important;
        }
        
        .btn:hover {
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }
        
        .card:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
      `}</style>
      
      <Navbar />
      
      {/* Main content area that will push footer down */}
      <main className="flex-grow-1" style={{ paddingTop: '76px' }}>
        {renderPage()}
      </main>
      
      <Footer />
      
      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default App;