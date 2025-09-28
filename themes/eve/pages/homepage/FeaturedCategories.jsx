import React from "react";
import "./FeaturedCategories.scss";

const categories = [
  {
    key: "men",
    label: "Shop Men",
    eyebrow: "For Him",
    image: "/men-banner.jpg",
    href: "#",
    variant: "tall"
  },
  {
    key: "women",
    label: "Shop Women",
    eyebrow: "For Her",
    image: "/women-banner.jpg",
    href: "#",
    variant: ""
  },
  {
    key: "kids",
    label: "Shop Kids",
    eyebrow: "For Kids",
    image: "/kid-banner.jpg",
    href: "#",
    variant: ""
  }
];

function FeaturedCategories() {
  return (
    <section className="categories">
        <div className="container">
            <div className="category-grid">
                <div className="category-card">
                    <div className="category-icon">🎬</div>
                    <div className="category-name">Streaming</div>
                </div>
                <div className="category-card">
                    <div className="category-icon">🎮</div>
                    <div className="category-name">Gaming</div>
                </div>
                <div className="category-card">
                    <div className="category-icon">🎵</div>
                    <div className="category-name">Music</div>
                </div>
                <div className="category-card">
                    <div className="category-icon">📚</div>
                    <div className="category-name">Education</div>
                </div>
                <div className="category-card">
                    <div className="category-icon">💼</div>
                    <div className="category-name">Business</div>
                </div>
                <div className="category-card">
                    <div className="category-icon">🛡️</div>
                    <div className="category-name">Security</div>
                </div>
                <div className="category-card">
                    <div className="category-icon">☁️</div>
                    <div className="category-name">Cloud</div>
                </div>
                <div className="category-card">
                    <div className="category-icon">🎨</div>
                    <div className="category-name">Creative</div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
