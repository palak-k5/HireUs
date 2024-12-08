import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null || user.role !== 'recruiter') {
            navigate("/");
        }
    }, [user, navigate]);

    return <>{children}</>;
};

// PropTypes validation
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is passed and is of type `node`
};

export default ProtectedRoute;
