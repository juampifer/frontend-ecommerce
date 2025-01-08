const Logo = () => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 100 100"
          style={{ display: "block", margin: "auto" }}
        >
          {/* Fondo circular*/}
          <circle cx="50" cy="50" r="48" fill="#374151" />
          
          {/* Texto estilizado */}
          <text
            x="50%"
            y="54%"
            fill="white"
            fontSize="40"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Arial', sans-serif"
          >
            G2
          </text>
        </svg>
      );
}

export default Logo
  