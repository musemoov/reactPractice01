


export default function CoreConcept({image, title, description}) {
  //console.log('CORECONCEPT COMPONENT EXECUTING');
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}