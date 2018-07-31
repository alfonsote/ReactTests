import React from "react";
import { Steps, Icon, Row, Col, Form, Input, Card, Tooltip,  Avatar } from 'antd';

export const Step = Steps.Step;
console.log("saliendo");
const elJson = [
	{
		"Name": "Ulysses",
		"LastName": "Mullen",
		"Direction": "584-3230 Sagittis Av.",
		"Telefono": "1-639-493-8230"
	},
	{
		"Name": "Leandra",
		"LastName": "Peters",
		"Direction": "7601 Tellus. Rd.",
		"Telefono": "1-858-741-4299"
	},
	{
		"Name": "Lana",
		"LastName": "Carrillo",
		"Direction": "4625 Ullamcorper St.",
		"Telefono": "1-829-385-3895"
	},
	{
		"Name": "Germaine",
		"LastName": "West",
		"Direction": "Ap #385-7520 Enim, Street",
		"Telefono": "1-629-803-4836"
	},
	{
		"Name": "Carissa",
		"LastName": "Pitts",
		"Direction": "Ap #182-7372 Nec, Avenue",
		"Telefono": "1-778-322-6526"
	},
	{
		"Name": "Logan",
		"LastName": "King",
		"Direction": "Ap #122-8932 Eu, Ave",
		"Telefono": "1-119-653-9978"
	},
	{
		"Name": "James",
		"LastName": "Waters",
		"Direction": "Ap #667-7249 Lacus, Av.",
		"Telefono": "1-757-492-1075"
	},
	{
		"Name": "Aurelia",
		"LastName": "Hansen",
		"Direction": "Ap #390-9844 Aliquam Street",
		"Telefono": "1-245-166-1620"
	},
	{
		"Name": "Kim",
		"LastName": "Knight",
		"Direction": "266 Nunc St.",
		"Telefono": "1-481-425-0992"
	},
	{
		"Name": "Harper",
		"LastName": "Perkins",
		"Direction": "Ap #336-7167 Duis St.",
		"Telefono": "1-629-145-0217"
	},
	{
		"Name": "Kennan",
		"LastName": "Dennis",
		"Direction": "8877 Nullam Rd.",
		"Telefono": "1-124-450-5758"
	},
	{
		"Name": "Christian",
		"LastName": "Ward",
		"Direction": "802-2892 Placerat Rd.",
		"Telefono": "1-568-404-0238"
	},
	{
		"Name": "Robert",
		"LastName": "Sullivan",
		"Direction": "Ap #132-2513 Penatibus Avenue",
		"Telefono": "1-819-995-8177"
	},
	{
		"Name": "Cruz",
		"LastName": "Booker",
		"Direction": "8234 Curabitur Av.",
		"Telefono": "1-565-501-1740"
	},
	{
		"Name": "Fleur",
		"LastName": "Herrera",
		"Direction": "Ap #562-1304 Mauris Rd.",
		"Telefono": "1-484-921-7344"
	},
	{
		"Name": "Macon",
		"LastName": "Stanley",
		"Direction": "965-9676 Pellentesque St.",
		"Telefono": "1-567-749-0460"
	},
	{
		"Name": "Baker",
		"LastName": "Jarvis",
		"Direction": "216-1424 Ipsum Street",
		"Telefono": "1-499-807-5080"
	},
	{
		"Name": "Damon",
		"LastName": "Ruiz",
		"Direction": "435-1945 Sapien. St.",
		"Telefono": "1-554-403-7638"
	},
	{
		"Name": "Hayden",
		"LastName": "Ayala",
		"Direction": "802-828 Purus, St.",
		"Telefono": "1-243-720-0043"
	},
	{
		"Name": "Arsenio",
		"LastName": "Tucker",
		"Direction": "1254 Phasellus Rd.",
		"Telefono": "1-551-293-8442"
	},
	{
		"Name": "Daryl",
		"LastName": "Walters",
		"Direction": "P.O. Box 356, 4324 Vulputate, St.",
		"Telefono": "1-219-779-3830"
	},
	{
		"Name": "Noble",
		"LastName": "Neal",
		"Direction": "P.O. Box 129, 9875 Vehicula Rd.",
		"Telefono": "1-978-574-6074"
	},
	{
		"Name": "Patricia",
		"LastName": "Douglas",
		"Direction": "Ap #695-9346 A, Street",
		"Telefono": "1-253-536-9928"
	},
	{
		"Name": "Marsden",
		"LastName": "Mitchell",
		"Direction": "P.O. Box 201, 852 Nec, Rd.",
		"Telefono": "1-799-921-1960"
	},
	{
		"Name": "Justina",
		"LastName": "Sweeney",
		"Direction": "773-5848 Eu Street",
		"Telefono": "1-991-635-2684"
	},
	{
		"Name": "Azalia",
		"LastName": "Herrera",
		"Direction": "3897 Consectetuer Rd.",
		"Telefono": "1-256-310-1558"
	},
	{
		"Name": "Ethan",
		"LastName": "Mckinney",
		"Direction": "6352 Aliquet St.",
		"Telefono": "1-245-268-3213"
	},
	{
		"Name": "Bradley",
		"LastName": "Cameron",
		"Direction": "Ap #913-6555 Accumsan Rd.",
		"Telefono": "1-118-161-2967"
	},
	{
		"Name": "Lisandra",
		"LastName": "Cabrera",
		"Direction": "6389 Donec Avenue",
		"Telefono": "1-208-923-9646"
	},
	{
		"Name": "Kennan",
		"LastName": "Mayo",
		"Direction": "978-2834 Vitae Road",
		"Telefono": "1-956-100-1788"
	},
	{
		"Name": "Hope",
		"LastName": "Watson",
		"Direction": "2612 Lorem, Rd.",
		"Telefono": "1-502-945-5926"
	},
	{
		"Name": "Keith",
		"LastName": "Bowen",
		"Direction": "3623 Duis Av.",
		"Telefono": "1-784-358-4212"
	},
	{
		"Name": "Hayes",
		"LastName": "Doyle",
		"Direction": "422-4483 Diam Rd.",
		"Telefono": "1-503-774-9121"
	},
	{
		"Name": "Shaine",
		"LastName": "Jennings",
		"Direction": "P.O. Box 629, 5162 Nec, Rd.",
		"Telefono": "1-610-804-2079"
	},
	{
		"Name": "Heather",
		"LastName": "Mckinney",
		"Direction": "434-7285 Nullam Av.",
		"Telefono": "1-454-823-8355"
	},
	{
		"Name": "Orlando",
		"LastName": "Raymond",
		"Direction": "268-9026 Malesuada Rd.",
		"Telefono": "1-321-240-9458"
	},
	{
		"Name": "Baker",
		"LastName": "Jackson",
		"Direction": "P.O. Box 353, 2915 Velit St.",
		"Telefono": "1-662-714-1546"
	},
	{
		"Name": "Gwendolyn",
		"LastName": "Bennett",
		"Direction": "527-6047 Vehicula Rd.",
		"Telefono": "1-826-433-4923"
	},
	{
		"Name": "Alfreda",
		"LastName": "Richard",
		"Direction": "P.O. Box 521, 4870 Eu, Avenue",
		"Telefono": "1-316-836-7324"
	},
	{
		"Name": "Karina",
		"LastName": "Raymond",
		"Direction": "961-6712 Suscipit, St.",
		"Telefono": "1-651-173-7015"
	},
	{
		"Name": "Montana",
		"LastName": "Rasmussen",
		"Direction": "7935 Et Rd.",
		"Telefono": "1-602-588-0375"
	},
	{
		"Name": "Mollie",
		"LastName": "Wilder",
		"Direction": "8070 Tellus. Avenue",
		"Telefono": "1-310-652-8229"
	},
	{
		"Name": "Uma",
		"LastName": "Farmer",
		"Direction": "891-3927 Dictum Avenue",
		"Telefono": "1-739-461-1318"
	},
	{
		"Name": "Belle",
		"LastName": "Garrison",
		"Direction": "Ap #131-3952 Vitae, Avenue",
		"Telefono": "1-778-854-8220"
	},
	{
		"Name": "Eden",
		"LastName": "Smith",
		"Direction": "Ap #238-4809 Non Avenue",
		"Telefono": "1-491-803-0623"
	},
	{
		"Name": "Rahim",
		"LastName": "Roberts",
		"Direction": "449-6488 Quisque Rd.",
		"Telefono": "1-286-305-0781"
	},
	{
		"Name": "Cade",
		"LastName": "Bennett",
		"Direction": "793-4693 Nulla Road",
		"Telefono": "1-168-484-5109"
	},
	{
		"Name": "Yeo",
		"LastName": "Mitchell",
		"Direction": "Ap #777-5068 Tempor Street",
		"Telefono": "1-700-261-5652"
	},
	{
		"Name": "Baxter",
		"LastName": "Pace",
		"Direction": "656-6954 Tincidunt St.",
		"Telefono": "1-290-791-6614"
	},
	{
		"Name": "Lesley",
		"LastName": "Newman",
		"Direction": "Ap #742-9461 Vulputate, Rd.",
		"Telefono": "1-296-359-6944"
	},
	{
		"Name": "Philip",
		"LastName": "Jacobs",
		"Direction": "251-5080 Mauris Avenue",
		"Telefono": "1-459-287-4387"
	},
	{
		"Name": "Kane",
		"LastName": "Conley",
		"Direction": "Ap #392-4825 Eget Avenue",
		"Telefono": "1-441-100-4795"
	},
	{
		"Name": "Rylee",
		"LastName": "Rasmussen",
		"Direction": "Ap #182-5777 In, Rd.",
		"Telefono": "1-674-945-5683"
	},
	{
		"Name": "Galena",
		"LastName": "Goodwin",
		"Direction": "Ap #245-7483 Neque St.",
		"Telefono": "1-615-869-1117"
	},
	{
		"Name": "April",
		"LastName": "Walker",
		"Direction": "Ap #583-3946 Phasellus Road",
		"Telefono": "1-344-726-2028"
	},
	{
		"Name": "Amela",
		"LastName": "Campos",
		"Direction": "P.O. Box 252, 2681 Lorem Avenue",
		"Telefono": "1-288-692-3542"
	},
	{
		"Name": "Amos",
		"LastName": "Floyd",
		"Direction": "3115 Rutrum Rd.",
		"Telefono": "1-530-932-7214"
	},
	{
		"Name": "Ali",
		"LastName": "Lowe",
		"Direction": "Ap #982-1510 Ultricies Rd.",
		"Telefono": "1-722-174-4935"
	},
	{
		"Name": "Imelda",
		"LastName": "Sweeney",
		"Direction": "7620 Rhoncus. Avenue",
		"Telefono": "1-989-706-5960"
	},
	{
		"Name": "Debra",
		"LastName": "Wagner",
		"Direction": "P.O. Box 384, 1016 Ligula. St.",
		"Telefono": "1-161-984-0025"
	},
	{
		"Name": "Glenna",
		"LastName": "Reed",
		"Direction": "Ap #171-5829 Lacinia Avenue",
		"Telefono": "1-654-186-8815"
	},
	{
		"Name": "Alana",
		"LastName": "Moon",
		"Direction": "491-7405 Erat St.",
		"Telefono": "1-483-124-4780"
	},
	{
		"Name": "William",
		"LastName": "Mueller",
		"Direction": "P.O. Box 969, 6039 Nonummy Rd.",
		"Telefono": "1-492-818-6911"
	},
	{
		"Name": "Haviva",
		"LastName": "Howard",
		"Direction": "6177 Sed, Road",
		"Telefono": "1-290-239-3856"
	},
	{
		"Name": "Mariko",
		"LastName": "Vega",
		"Direction": "P.O. Box 586, 4703 Quisque St.",
		"Telefono": "1-479-514-1188"
	},
	{
		"Name": "Thane",
		"LastName": "Solis",
		"Direction": "405-7922 Hendrerit Rd.",
		"Telefono": "1-782-158-0707"
	},
	{
		"Name": "Eliana",
		"LastName": "Hester",
		"Direction": "P.O. Box 707, 7532 Pretium Av.",
		"Telefono": "1-954-520-8378"
	},
	{
		"Name": "Delilah",
		"LastName": "Osborne",
		"Direction": "Ap #290-8738 Adipiscing Street",
		"Telefono": "1-562-532-4779"
	},
	{
		"Name": "Cally",
		"LastName": "Howard",
		"Direction": "P.O. Box 302, 263 Libero. Ave",
		"Telefono": "1-486-266-9417"
	},
	{
		"Name": "Uma",
		"LastName": "Ashley",
		"Direction": "Ap #733-4101 Rutrum. Rd.",
		"Telefono": "1-422-990-4998"
	},
	{
		"Name": "Imogene",
		"LastName": "Perkins",
		"Direction": "P.O. Box 550, 1230 Ipsum. Avenue",
		"Telefono": "1-872-266-5470"
	},
	{
		"Name": "Imogene",
		"LastName": "Wilkins",
		"Direction": "194-8076 Tellus. Rd.",
		"Telefono": "1-378-258-1924"
	},
	{
		"Name": "Nomlanga",
		"LastName": "Alvarado",
		"Direction": "753-7323 Ut St.",
		"Telefono": "1-775-492-3014"
	},
	{
		"Name": "Valentine",
		"LastName": "Joyner",
		"Direction": "P.O. Box 728, 7981 Adipiscing Ave",
		"Telefono": "1-646-178-6716"
	},
	{
		"Name": "Tanisha",
		"LastName": "Arnold",
		"Direction": "P.O. Box 515, 9593 Ut, St.",
		"Telefono": "1-978-200-3919"
	},
	{
		"Name": "Georgia",
		"LastName": "Winters",
		"Direction": "8368 Curabitur Rd.",
		"Telefono": "1-304-930-7126"
	},
	{
		"Name": "Sage",
		"LastName": "Atkins",
		"Direction": "439-2083 Tincidunt Road",
		"Telefono": "1-589-947-5106"
	},
	{
		"Name": "Sawyer",
		"LastName": "Cain",
		"Direction": "Ap #960-1856 Egestas Ave",
		"Telefono": "1-396-558-4595"
	},
	{
		"Name": "Kalia",
		"LastName": "Meyers",
		"Direction": "9375 A Street",
		"Telefono": "1-761-908-9206"
	},
	{
		"Name": "Nigel",
		"LastName": "Woodard",
		"Direction": "785 Mauris Avenue",
		"Telefono": "1-912-637-8539"
	},
	{
		"Name": "Merrill",
		"LastName": "Colon",
		"Direction": "5848 Nec, St.",
		"Telefono": "1-981-132-5375"
	},
	{
		"Name": "Imani",
		"LastName": "Ramsey",
		"Direction": "P.O. Box 721, 9874 Felis. Street",
		"Telefono": "1-792-515-6540"
	},
	{
		"Name": "Shoshana",
		"LastName": "Cox",
		"Direction": "Ap #300-4463 Tellus St.",
		"Telefono": "1-884-269-1643"
	},
	{
		"Name": "Orlando",
		"LastName": "Buckner",
		"Direction": "163-3670 Eu Ave",
		"Telefono": "1-499-831-6997"
	},
	{
		"Name": "Abigail",
		"LastName": "Williamson",
		"Direction": "794-4930 Tincidunt Rd.",
		"Telefono": "1-410-736-1005"
	},
	{
		"Name": "Galena",
		"LastName": "Boone",
		"Direction": "892-5766 Nostra, Ave",
		"Telefono": "1-242-798-8440"
	},
	{
		"Name": "Rhea",
		"LastName": "Norris",
		"Direction": "1310 Amet Street",
		"Telefono": "1-222-476-2549"
	},
	{
		"Name": "Phyllis",
		"LastName": "Salazar",
		"Direction": "261 Lorem St.",
		"Telefono": "1-749-942-3039"
	},
	{
		"Name": "Bruce",
		"LastName": "Cunningham",
		"Direction": "7801 Sem St.",
		"Telefono": "1-305-991-5138"
	},
	{
		"Name": "Odette",
		"LastName": "Peterson",
		"Direction": "Ap #759-3586 Ullamcorper. St.",
		"Telefono": "1-853-812-5683"
	},
	{
		"Name": "Ila",
		"LastName": "Clemons",
		"Direction": "351-3511 Dapibus Av.",
		"Telefono": "1-570-393-3890"
	},
	{
		"Name": "Constance",
		"LastName": "Clark",
		"Direction": "P.O. Box 744, 4351 Sed St.",
		"Telefono": "1-182-366-4087"
	},
	{
		"Name": "Serena",
		"LastName": "Joyner",
		"Direction": "Ap #196-9536 Dapibus Road",
		"Telefono": "1-753-519-8597"
	},
	{
		"Name": "Dante",
		"LastName": "Holloway",
		"Direction": "3512 Rutrum Road",
		"Telefono": "1-343-622-5569"
	},
	{
		"Name": "Yen",
		"LastName": "Morse",
		"Direction": "Ap #878-2057 Eget, St.",
		"Telefono": "1-690-944-5270"
	},
	{
		"Name": "Nora",
		"LastName": "Collier",
		"Direction": "3876 At Rd.",
		"Telefono": "1-526-398-8133"
	},
	{
		"Name": "Preston",
		"LastName": "Turner",
		"Direction": "310-7031 Ullamcorper Rd.",
		"Telefono": "1-729-708-8127"
	},
	{
		"Name": "August",
		"LastName": "Rios",
		"Direction": "1489 Non St.",
		"Telefono": "1-766-335-2848"
	},
	{
		"Name": "Rose",
		"LastName": "Newton",
		"Direction": "P.O. Box 642, 6519 Ipsum St.",
		"Telefono": "1-962-909-3832"
	},
	{
		"Name": "Brenna",
		"LastName": "Farrell",
		"Direction": "Ap #911-4856 Leo. Rd.",
		"Telefono": "1-697-199-2355"
	}
];
export function Personas() {

  const content = elJson.map((post) =>
   
       <Col span={8}>
        <Card title={post.Name} >  
      <Row>
        <Col span={12}>
        <p><b>Direccion: </b>  {post.Direction }</p>
      <p><b>Telefono: </b>  {post.Telefono}</p>
      <p><b>Apellido:</b>  {post.LastName}</p>
     
        </Col>
      
      </Row>
    </Card> 
    </Col>
   
  );
  return (
    <div>

      {content}
    </div>
  );
}
export const Home = () => (

  <div>
    
 
     <Personas   />
  </div>
);
