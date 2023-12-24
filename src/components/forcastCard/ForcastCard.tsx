function ForcastCard({ dayData, onClick }: any) {
  return (
    <li onClick={onClick}>
      <h3>Friday</h3>
      <p>22 Dec</p>
      <div>
        <img />
        <p>15 *</p>
      </div>
    </li>
  );
}

export default ForcastCard;
