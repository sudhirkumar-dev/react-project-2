// Write your code here.
const cardList = props => {
  const {bannerItems} = props
  const {headerText, className, description} = bannerItems

  return (
    <li className="banner-card-item">
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}
