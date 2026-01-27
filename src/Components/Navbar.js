// components/Navbar.js - Server Component (SEO friendly)

function Navbar() {
  return (
    <nav
      style={{
        background: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        borderBottom: "1px solid #e5e7eb",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          padding: "0 20px",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#0066cc",
            textDecoration: "none",
          }}
        >
          Social Banner Maker
        </a>

        <ul
          style={{
            display: "flex",
            gap: "30px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="/disclaimer"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 12px",
                borderRadius: "6px",
              }}
            >
              Disclaimer
            </a>
          </li>
          <li>
            <a
              href="/about-us"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 12px",
                borderRadius: "6px",
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/terms-and-conditions"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 12px",
                borderRadius: "6px",
              }}
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
                padding: "8px 12px",
                borderRadius: "6px",
              }}
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
