import React, { useState } from "react";
import {Card,CardHeader,CardBody,CardFooter,Typography,} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const intitalState = {
    name: "",
    password: "",
  };

  
  const [values, setValues] = useState(intitalState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  const handleLogin = () => {
    dispatch(login(values));
  };

  const handleRegister = () => {
    navigate("/register");                                                                                                                                             // Navigate to the registration page
  };

  const dispatch = useDispatch();


  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>

                                                                                                        {/*  Reg Button */}
           <Button variant="text" color="blue" fullWidth onClick={handleRegister} className="mt-2">
            Register
          </Button>

        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
