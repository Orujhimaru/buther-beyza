import React from "react";
import { useParams, Link } from "react-router-dom";

const SucukDetail = () => {
  const { id } = useParams();

  const products = {
    1: {
      id: 1,
      name: "Baton Sucuk",
      price: "350,00₺",
      weight: "350 gr/paket",
      image: "/images/et_resimler/baton_sucuk.png",
      description: "Geleneksel baton sucuk, özel baharatlarla hazırlanmıştır.",
      features: [
        "Geleneksel üretim yöntemi",
        "Özel baharat karışımı",
        "Doğal fermentasyon",
        "Premium dana eti",
        "El yapımı kalitesi",
      ],
      cookingTips: [
        "Tavada orta ateşte pişirin",
        "3-4 dakika her tarafını çevirin",
        "Yumurta ile birlikte servis edin",
        "Sıcak ekmek ile servis yapın",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "30g",
        calories: "380 kcal",
      },
    },
    2: {
      id: 2,
      name: "Baton Sucuk",
      price: "1.000,00₺",
      weight: "kg",
      image: "/images/et_resimler/baton_kgsucuk.png",
      description:
        "Kilogram olarak satılan baton sucuk, toplu alım için ideal.",
      features: [
        "Toplu alım avantajı",
        "Ekonomik seçenek",
        "Aynı kalite garantisi",
        "Uzun raf ömrü",
        "Pratik saklama",
      ],
      cookingTips: [
        "İhtiyacınız kadar dilimleyin",
        "Tavada orta ateşte pişirin",
        "Kahvaltıda servis edin",
        "Buzdolabında saklayın",
      ],
      nutritionalInfo: {
        protein: "25g",
        fat: "30g",
        calories: "380 kcal",
      },
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Ürün bulunamadı</h2>
        <Link to="/sucuk">Sucuk sayfasına dön</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Sol taraf - Ürün resmi */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Sağ taraf - Ürün bilgileri */}
        <div>
          <h1
            style={{
              color: "var(--primary-color)",
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            {product.name}
          </h1>

          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#e74c3c",
              marginBottom: "1rem",
            }}
          >
            {product.price} / {product.weight}
          </div>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            {product.description}
          </p>

          {/* Özellikler */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
              Özellikler
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--primary-color)",
                      marginRight: "0.5rem",
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pişirme önerileri */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
              Pişirme Önerileri
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {product.cookingTips.map((tip, index) => (
                <li
                  key={index}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--primary-color)",
                      marginRight: "0.5rem",
                    }}
                  >
                    •
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Besin değerleri */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>
              Besin Değerleri (100g)
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
                >
                  Protein
                </div>
                <div>{product.nutritionalInfo.protein}</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
                >
                  Yağ
                </div>
                <div>{product.nutritionalInfo.fat}</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{ fontWeight: "bold", color: "var(--primary-color)" }}
                >
                  Kalori
                </div>
                <div>{product.nutritionalInfo.calories}</div>
              </div>
            </div>
          </div>

          {/* Geri dön butonu */}
          <Link
            to="/sucuk"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "var(--primary-color)",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "600",
              textAlign: "center",
            }}
            onClick={() => {
              // Ensure scroll to top when navigating back
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
          >
            Sucuk Ürünlerine Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SucukDetail;
