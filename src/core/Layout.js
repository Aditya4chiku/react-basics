import React from 'react'
import Menu from './Menu'

const Layout = ({
    title,
    description,
    className,
    children

}) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
    )
}
export default Layout