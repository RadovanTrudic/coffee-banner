const CodeGenerator = ({ banner }: { banner: any }) => {
  const jsxCode = `
    <div className="card" style={{ width: "${banner.width}px" }}>
      <h2>{${banner.coffee.title}}</h2>
      <div className="container">
        <div className="item">
          <p>{${banner.coffee.description}}</p>
        </div>
        <div className="item">{${
          banner.coffee.image ? `<img src="${banner.coffee.image}" alt="Logo"></img>` : ''
        }}</div>
      </div>
      <div className="ingredients">
        {Array.isArray(${banner.coffee.ingredients}) &&
          ${banner.coffee.ingredients}.map((ingredient, index) => (
            <div className="ingredient" key={index}>
              {ingredient}
            </div>
          ))}
      </div>
    </div>
  `;

  return (
    <pre>
      <code>{jsxCode}</code>
    </pre>
  );
};

export default CodeGenerator;
