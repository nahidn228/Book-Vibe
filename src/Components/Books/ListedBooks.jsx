import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "./Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold">
            Books I read {readList.length}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
           {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
           }
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold">My wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
