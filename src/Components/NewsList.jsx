
import { useState } from "react";
import { Card , Row ,Col} from "react-bootstrap";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

export function NewsList(props) {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  

  const totalArticles =  newsData?.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData?.slice(startIndex, endIndex);

  return (
    <div >
      <Row >
        {currentArticles?.map((article) => (
          <Col key={article.url}>
            <Card className="mb-3 d-inline-block my-3 mx-3 px-2 py-2 bg-dark text-white">
              <Card.Img src={article.image} style={{height:"200px"}} variant="top" />
              <Card.Body>
                <Card.Title>{article.title?.slice(0, 50)}</Card.Title>
                <Card.Text>{article.description?.slice(0,90)}</Card.Text>
                <Card.Link href={article.url} className="btn btn-primary">Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default NewsList;