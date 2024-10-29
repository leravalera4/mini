
import React from "react";
import Heading from "./Heading";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return <header className="header">
  <Heading></Heading>
  <Nav></Nav>
    </header>;
  }

}

export default Header;
import React from "react";

class Heading extends React.Component {
  render() {
    return <h1 className="heading">Hello, world!</h1>;
  }

}

export default Heading;
import React from "react";
import ListItem from "./ListItem";

class Nav extends React.Component {
  render() {
    return <nav className="nav">
  <ul className="list">
    <ListItem />
    <ListItem />
  </ul>
    </nav>;
  }

}

export default Nav;
import React from "react";

class ListItem extends React.Component {
  render() {
    return <li className="list-item" />;
  }

}

export default ListItem;
import React from "react";

class Main extends React.Component {
  render() {
    return <main className="main">
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap Example</title>
  {}
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
  <div className="container main-content">
    <div />
    <div className="homepage">
      <div style={{
            marginBottom: '2em'
          }}>
        <div className="col-lg-8">
          <h3>Find a Product</h3>
          <form><input placeholder="Search for..." type="text" className="d-block d-sm-none form-control" defaultValue />
            <div className="hstack gap-2 minBreakpoint-xs"><input placeholder="Search for..." type="text" className="d-none d-sm-block form-control" defaultValue /><select className="form-select">
                <option value="superstore">Superstore</option>
                <option value="nofrills">No Frills</option>
                <option value="saveon">Save-On-Foods</option>
                <option value="loblaw">Loblaws</option>
                <option value="maxi">Maxi</option>
                <option value="fortinos">Fortinos</option>
                <option value="valumart">Valu-Mart</option>
                <option value="zehrs">Zehrs</option>
                <option value="rass">Atlantic Superstore</option>
                <option value="wholesaleclub">Wholesale Club</option>
                <option value="provigo">Provigo</option>
                <option value="voila">Safeway/Sobeys</option>
                <option value="coop">Calgary Co-op</option>
                <option value="walmart">Walmart</option>
              </select><select className="form-select">
                <option value>Select a Store... (click pin to sort)</option>
                <option value={1077}>Don Mills and Eglinton</option>
                <option value="2800SF0001">PC Express Marine Parade</option>
                <option value={2800}>Weston Road</option>
                <option value={2809}>Scarborough</option>
                <option value={1033}>Dufferin & Steeles</option>
                <option value={4450}>Joe Fresh Mobile Store #4450</option>
                <option value={2841}>Mavis Road</option>
                <option value={2801}>Highway 10 and Steeles</option>
                <option value={1080}>Winston Churchill</option>
                <option value={1024}>North Oakville</option>
                <option value={1012}>Ajax</option>
                <option value={1030}>Aurora</option>
                <option value={2810}>Milton</option>
                <option value={1058}>Whitby</option>
                <option value={2811}>Georgetown</option>
                <option value={2842}>Gibb Street</option>
                <option value={1018}>Newmarket</option>
                <option value={1043}>Oshawa</option>
                <option value={2806}>Grimsby</option>
                <option value={0577}>St. Catharines</option>
                <option value={2822}>Highland Hills</option>
                <option value={0512}>Wasaga Beach</option>
                <option value={2831}>Peterborough</option>
                <option value={2818}>Simcoe</option>
                <option value={0569}>Midland</option>
                <option value={1091}>Oxford and Gammage</option>
                <option value={2812}>Oakridge</option>
                <option value={0551}>St. Thomas</option>
                <option value={2823}>Strathroy</option>
                <option value={2826}>Sarnia</option>
                <option value={0562}>Chatham</option>
                <option value={1017}>Brockville</option>
                <option value={0566}>Leamington</option>
                <option value={2813}>South Kanata</option>
                <option value={0567}>Walker Road</option>
                <option value={2827}>Dougall Avenue</option>
                <option value={2803}>Sudbury</option>
                <option value={1009}>Westboro</option>
                <option value={1071}>South Orleans</option>
                <option value={1504}>Thunder Bay</option>
                <option value={1503}>Steinbach</option>
                <option value={1506}>Regent Avenue</option>
                <option value={1514}>St. Anne's Road</option>
                <option value={1512}>Gateway Road</option>
                <option value={1509}>Bison</option>
                <option value={1516}>Kenaston Boulevard</option>
                <option value={1505}>McPhillips</option>
                <option value={1511}>Sargent</option>
                <option value={1508}>Portage</option>
                <option value={1510}>Winkler</option>
                <option value={1515}>Brandon</option>
                <option value={1582}>Yorkton</option>
                <option value={1584}>Prince of Wales</option>
                <option value={1533}>Golden Mile</option>
                <option value={1585}>Rochdale Boulevard</option>
                <option value={1583}>Moose Jaw</option>
                <option value={1581}>Prince Albert</option>
                <option value={1535}>8th Street East</option>
                <option value={1536}>Confederation Drive</option>
                <option value={1550}>Medicine Hat</option>
                <option value={1571}>Lloydminster</option>
                <option value={1541}>Lethbridge</option>
                <option value={1547}>Camrose</option>
                <option value={1548}>Fort McMurray</option>
                <option value={1567}>Sherwood Park</option>
                <option value={1569}>Whitemud</option>
                <option value={2555}>Ellerslie & 50th</option>
                <option value={1566}>Clareview</option>
                <option value={1586}>Seton</option>
                <option value={1546}>McKenzie</option>
                <option value={1549}>South Common</option>
                <option value={1542}>Westwinds</option>
                <option value={1570}>Calgary Trail</option>
                <option value={1576}>20th Avenue</option>
                <option value={1537}>Heritage</option>
                <option value={1579}>Red Deer</option>
                <option value={1502}>Kingsway Avenue</option>
                <option value={1539}>Deerfoot</option>
                <option value={1540}>Airdrie</option>
                <option value={1572}>Edmonton Northwest</option>
                <option value={1578}>Shawnessy</option>
                <option value={1590}>East Village</option>
                <option value={1574}>Southport</option>
                <option value={1545}>Huntington</option>
                <option value={1538}>Real Canadian Superstore Windermere Way</option>
                <option value={1543}>Coventry Hills</option>
                <option value={1573}>Edmonton West</option>
                <option value={1568}>St. Albert</option>
                <option value={1577}>Signal Hill</option>
                <option value={1575}>Hamptons</option>
                <option value={3730}>Real Canadian Superstore Nursery Calgary</option>
                <option value={1565}>Spruce Grove</option>
                <option value={1553}>Cranbrook</option>
                <option value={1544}>Grande Prairie</option>
                <option value={1531}>Vernon</option>
                <option value={1564}>Kelowna</option>
                <option value={1532}>Penticton</option>
                <option value={1552}>Westbank</option>
                <option value={1522}>Kamloops</option>
                <option value={1523}>Chilliwack</option>
                <option value={1558}>Abbotsford</option>
                <option value={1559}>Mission</option>
                <option value={1562}>Prince George</option>
                <option value={1555}>Pitt Meadows</option>
                <option value={1561}>Langley</option>
                <option value={1526}>Coquitlam Westwood</option>
                <option value={1551}>Real Canadian Superstore Surrey</option>
                <option value={1556}>Guildford</option>
                <option value={1519}>Coquitlam</option>
                <option value={1521}>Surrey</option>
                <option value={1554}>Delta</option>
                <option value={1518}>Burnaby</option>
                <option value={1560}>Seymour</option>
                <option value={1520}>Grandview</option>
                <option value={1517}>Real Canadian Superstore Marine Drive</option>
                <option value={1557}>Richmond</option>
                <option value={1527}>Victoria</option>
                <option value={1563}>Duncan</option>
                <option value={1525}>Nanaimo</option>
                <option value={1528}>Courtenay</option>
                <option value={1524}>Real Canadian Superstore Campbell River</option>
                <option value={1530}>Whitehorse</option>
              </select><button type="button" title="Sort Stores by Distance from Your Location" className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={19} height={19} fill="currentColor" className="iconButton">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg></button><button type="submit" className="d-none d-sm-block btn btn-primary">Search</button></div><button type="submit" className="d-block d-sm-none btn btn-primary">Search</button>
          </form>
        </div>
        <div className="sale">Note: We are currently unable to search or retreive new price data from Walmart.</div>
      </div>
      <p className="lead">Welcome to Grocery Tracker, a useful tool for saving money on your next trip to the grocery
        store!</p>
      <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
          <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
        </svg> View Price History</h4>
      <p>See historic pricing for products at your local store and other nearby stores. If a product doesn't have a
        recorded price history, just add it to a basket and we'll start tracking prices going forward.</p>
      <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
          <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg> Watch Items & See When They Go On Sale</h4>
      <p>Add items to a basket and then check back every week to see if they've gone on sale (or get an optional email
        alert!). Create a basket for kitchen staples that you want to stock up on when they're cheap, and then wait
        for a notification that they've dropped to a reasonable price.</p>
      <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
          <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
          <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
          <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
          <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
        </svg> Compare Prices With Other Stores</h4>
      <p>Search to see how much a product costs at a different store to ensure you are getting the best deal. Or
        create identical baskets for two stores and see which store has the best price for your shopping trip this
        week!</p>
      <p>Ready to get started? <a href="/login">Create a free account</a> or <a href="/search">start searching
          now!</a></p>
      <hr />
      <div className="home-icons row">
        <div className="col-sm-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
            <path fillRule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z" />
          </svg>
          <p>View item details and price history</p>
        </div>
        <div className="col-sm-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
            <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" />
          </svg>
          <p>Add or remove item from your basket</p>
        </div>
        <div className="col-sm-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>
          <p>Buy item at the grocery store's website</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <div className="inflationTracker">
            <h4>Inflation Tracker</h4>
            <p>Price history of 39 <a href="/basket/6328b3d344832f8f088be5a1">common grocery items</a></p>
            <p>The the price of these items is 16% more than on May 1, 2022</p><canvas role="img" height={626} width={1096} style={{
                  display: 'block',
                  boxSizing: 'border-box',
                  height: 313,
                  width: 548
                }} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="inflationTracker">
            <h4>Comparison Chart <select className="comparison-city-select form-select">
                <option value="Calgary">Calgary</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Toronto">Toronto</option>
              </select></h4>
            <p>Compare prices for a basket of 40 common items at <a href="/basket/63891f6343b7808306f526e7">Superstore</a>, <a href="/basket/63891f9b43b7808306f526f1">No Frills</a>, <a href="/basket/646c045dc571fb9bd8d004c5">Walmart</a>, <a href="/basket/638925fe43b7808306f5da2a">Safeway</a>, & <a href="/basket/63891fdd43b7808306f526f6">Loblaws</a>. </p><canvas role="img" height={876} width={1096} style={{
                  display: 'block',
                  boxSizing: 'border-box',
                  height: 438,
                  width: 548
                }} />
          </div>
        </div>
      </div>
    </div>
  </div>
    </main>;
  }

}

export default Main;