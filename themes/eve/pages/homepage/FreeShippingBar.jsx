import React, { useEffect } from "react";
import "./FreeShippingBar.scss";
function FreeShippingBar() {
  useEffect(()=>{
    // Dynamic stats counter
        const animateValue = (element, start, end, duration) => {
            const startTimestamp = Date.now();
            const step = () => {
                const timestamp = Date.now();
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const current = Math.floor(progress * (end - start) + start);
                
                if (element.textContent.includes('+')) {
                    element.textContent = current.toLocaleString() + '+';
                } else if (element.textContent.includes('%')) {
                    element.textContent = current + '%';
                } else if (element.textContent.includes('/')) {
                    element.textContent = '24/7';
                } else {
                    element.textContent = current + '+';
                }
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        // Trigger stats animation when in view
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(num => {
                        const text = num.textContent;
                        if (text.includes('50K')) {
                            animateValue(num, 0, 50000, 2000);
                        } else if (text.includes('99.9')) {
                            animateValue(num, 0, 99, 2000);
                        } else if (text.includes('100')) {
                            animateValue(num, 0, 100, 2000);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
  }, [])
  return (
    <section className="stats">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">99.9%</div>
                    <div className="stat-label">Uptime Guarantee</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Customer Support</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">Premium Services</div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
