import { GetStaticPaths, GetStaticProps } from "next";
import MainLayout from "../../../../components/MainLayout";
import { Book, Books } from "../../../../interface";
import booksArray from "../../../../utils/booksData";

type Props = {
    item?: Book
    errors?: string
}

const bookDetails = ({ item, errors }: Props) => {
    return (
        <MainLayout title={`${item ? item.bookTitle : 'Book Title'} | LazyPandaTech`}>
            <div>Title: {item.bookTitle}</div>
            <div>id: {item.id}</div>
        </MainLayout>
    );
}

export default bookDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [];

    const categories = booksArray.map(books => books.category);
    const bookName = booksArray.map(books => books.books.map(book => book.bookTitle));

    categories.forEach((element, row) => {
        bookName[row].map(book => {
            const data =  {
                params: {
                    category: element,
                    bookTitle: book
                }
            }

            paths.push(data);
        });
    });

    return { paths, fallback: false }
  }


export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const category = params?.category;
        const bookTitle = params?.bookTitle;

        const categoryObj = booksArray.find((data) => data.category === category);
        const item = categoryObj.books.find(data => data.bookTitle === bookTitle);

        return { props: { item } };
    } catch (err) {
        return { props: { errors: err.message } }
    }
}