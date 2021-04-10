import Link from 'next/link';
import * as React from 'react';
import { Books } from '../interface';

type Props = {
    items: Books[]
};

const BooksCard = ({ items }: Props) => {
    return (
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            {items.map((book) => (
                <Link href="/books/[category]" as={`/books/${book.category}`}>
                    <div className="col mb-4">
                        <div className="card">
                            <div>
                                <div>(Image goes here)</div>

                                <div className="card-body">
                                    <div className="card-title">Books Name: {book.categoryTitle}</div>
                                    <div className="card-text">{book.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BooksCard;