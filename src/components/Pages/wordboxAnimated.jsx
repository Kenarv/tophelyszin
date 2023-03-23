import { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';
import { recommendList } from '../../Lists/recommendList';

const WordboxAnimated = () => {
    const [showWordBox, setShowWordBox] = useState(false);
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    const reveal = () => setShowWordBox(!showWordBox);
    return (
        <div>
            {recommendList.map(element => {
                return (
                    <div ref={parent}>
                        <strong className="dropdown-label" onClick={reveal}>
                            {element.head}
                        </strong>
                        {showWordBox && (
                            <p className="dropdown-content">{element.description}</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default WordboxAnimated;
