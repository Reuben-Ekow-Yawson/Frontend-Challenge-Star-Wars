import { useEffect, useState } from "react";
import { Modal, Pagination } from "react-bootstrap";
import "./characters.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Characters: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [details, setDetails] = useState<any>({});

  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id: number) => {
    getInfo(id);
    setShow(true);
  };

  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => {
          setPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const getInfo = async (id: number) => {
    const datas = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const response = await datas.json();
    setDetails(response.result);
  };

  const getData = async () => {
    const myData = await fetch(
      `https://www.swapi.tech/api/people?page=${page}&limit=10`
    );
    const response = await myData.json();
    setData(response.results);
    console.log(response.results);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="character-container">
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <section className="cardContainer">
        {data
          .filter((list) => {
            if (query === "") return list;

            if (
              list.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
              return list;

            return false;
          })
          .map((list) => (
            <Card
              sx={{ maxWidth: 345 }}
              style={{ overflowY: "hidden" }}
              className="container-card"
            >
              <CardActionArea>
                <CardContent key={list.uid}>
                  <Typography gutterBottom variant="h5" component="div">
                    {list.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>A person within the Star Wars universe</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleShow(list.uid)}
                >
                  More
                </Button>
              </CardActions>
            </Card>
          ))}
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name: {details?.properties?.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Description: {details?.description} </p>
          <p>Birth year: {details?.properties?.birth_year} </p>
          <p>Eye color: {details?.properties?.eye_color}</p>
          <p>Gender: {details?.properties?.gender}</p>
          <p>
            URL:{" "}
            <a href={details?.properties?.url} target="_blank" rel="noreferrer">
              {details?.properties?.url}
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Pagination size="lg" className="pages">
        {items}
      </Pagination>
    </div>
  );
};

export default Characters;
