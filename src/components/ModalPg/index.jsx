// ModalPg.js
import React from 'react';
import { Conteiner } from './style';

export function ModalPg({ openClick, idClick, onClose, children }) {
    return (
        <>
            <Conteiner>
                <div className='mainModal'>
                    <div className='closeBtn'>
                        <button className="close-button" onClick={onClose}>X</button>
                    </div>
                    {idClick && (
                        <div className='valueModal'>
                            {children}
                        </div>
                    )}
                </div>
            </Conteiner>
        </>
    );
}
