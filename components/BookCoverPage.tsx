import { Book } from "../interface";
import Image from "next/image";


type Props = {
    book: Book
};

const BookCoverPage = ({ book }: Props) => {
    return (
        <div className="col mb-4">
            <div className="card">
                <div>
                    <div>(Image goes here)</div>

                    <div className="card-body">
                        <div className="card-title">Books Name: {book.bookTitle}</div>
                        <Image src={book.coverPage} alt="logo" priority={true} width={200} height={300}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCoverPage;