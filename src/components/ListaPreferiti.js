const ListaPreferiti= () => {

    const [company,setCompany]= useState('');

    function buttonClick(){
        console.log("Bottone cliccato!")
        console.log(company)       
    }; 

    return(
        <Container>
        <Row className="justify-content-md-center">
          <Col md="10" className="ms-5">
            <h2>Aggiungi ai preferiti</h2>
          <Form>
           <Form.Control
            className="ms-3"
            type="text"
            value={company}
            placeholder="Search your company..."
            onChange={(e) => setCompany(e.target.value)}
          />
      </Form>
      </Col>
      <Col><Button onClick={buttonClick} ><FaSearchLocation/></Button> </Col>
        </Row>
       </Container>
    );
}

export default ListaPreferiti