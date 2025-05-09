const NavigationList = () => {
  const sections = ["About", "Skills", "Projects", "Links"];
  return (
    <div>
      <ul className="flex gap-10">
        {sections.map((section, id) => (
          <li key={id}>
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationList;
