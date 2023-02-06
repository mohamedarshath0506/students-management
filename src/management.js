import { useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      border: "1px solid",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function BasicTable() {
  const [students, setStudent] = useState([
    {
      id: 1,
      name: "Arshath",
      rollNo: 101,
      age: 21,
    },
    {
      id: 2,
      name: "Hyser",
      rollNo: 102,
      age: 23,
    },
    {
      id: 3,
      name: "Faizal",
      rollNo: 103,
      age: 35,
    },
    {
      id: 4,
      name: "Bala",
      rollNo: 104,
      age: 35,
    },
    {
      id: 5,
      name: "Suhail",
      rollNo: 105,
      age: 26,
    },
  ]);

  const [id, setStudentId] = useState();
  const [errorId, setErrorId] = useState("");
  const [name, setStudentName] = useState();
  const [errorName, setErrorName] = useState("");
  const [rollNo, setStudentRollNo] = useState();
  const [errorRollNo, setErrorRollNo] = useState("");
  const [age, setStudentAge] = useState();
  const [errorAge, setErrorAge] = useState("");
  const [upDate, setUpDate] = useState("");

  function addStudent() {
    setStudent([...students, { id, name, rollNo, age }]);

    setStudentId("");
    setStudentName("");
    setStudentRollNo("");
    setStudentAge("");

    if (id == "") {
      setErrorId("Enter Your Id");
    } else {
      setErrorId("");
    }
    if (name == "") {
      setErrorName("Enter Your Name");
    } else {
      setErrorName("");
    }
    if (rollNo == "") {
      setErrorRollNo("Enter Your RollNo");
    } else {
      setErrorRollNo("");
    }
    if (age < 18) {
      setErrorAge("Age Sut Bee GreaterTher 18");
    } else {
      setErrorAge("");
    }
  }

  function uncheck() {
    setStudentId("");
    setStudentName("");
    setStudentRollNo("");
    setStudentAge("");
    setOpen("");
  }

  function handleRemove(id) {
    setStudent(
      students.filter((item, i) => {
        return i !== id;
      })
    );
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [edit, setEdit] = useState(false);

  const handleClickEdit = (id) => {
    setEdit(true);
    setStudentId(students[id].id);
    setStudentName(students[id].name);
    setStudentRollNo(students[id].rollNo);
    setStudentAge(students[id].age);
  };
  const handleCloseEdit = () => {
    setEdit(false);
  };

  const editStudent = () => {
    const position = students.findIndex((student) => {
      return student.id == id;
    });
    students[position].name = name;
    students[position].rollNo = rollNo;
    students[position].age = age;
    return students;
  };

  return (
    <TableContainer component={Paper}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>{"Add Student"}</DialogTitle>
        <DialogContent>
          <DialogContentText display={"flex"} flexDirection={"column"}>
            <TextField
              type={"number"}
              label={"Id"}
              value={id}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <p>{errorId}</p>
            <TextField
              type={"text"}
              label={"Name"}
              value={name}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <p>{errorName}</p>
            <TextField
              type={"number"}
              label={"RollNo"}
              value={rollNo}
              onChange={(e) => setStudentRollNo(e.target.value)}
            />
            <p>{errorRollNo}</p>
            <TextField
              type={"number"}
              label={"Age"}
              value={age}
              onChange={(e) => setStudentAge(e.target.value)}
            />
            <p>{errorAge}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={uncheck}>
            Cancel
          </Button>
          <Button variant="contained" onClick={addStudent}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={edit}
        onClose={handleCloseEdit}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>{"Edit Student"}</DialogTitle>
        <DialogContent>
          <DialogContentText display={"flex"} flexDirection={"column"}>
            <TextField
              type={"number"}
              label={"Id"}
              value={id}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <p>{errorId}</p>
            <TextField
              type={"text"}
              label={"Name"}
              value={name}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <p>{errorName}</p>
            <TextField
              type={"number"}
              label={"RollNo"}
              value={rollNo}
              onChange={(e) => setStudentRollNo(e.target.value)}
            />
            <p>{errorRollNo}</p>
            <TextField
              type={"number"}
              label={"Age"}
              value={age}
              onChange={(e) => setStudentAge(e.target.value)}
            />
            <p sx={{ color: "red" }}>{errorAge}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={uncheck}>
            Cancel
          </Button>
          <Button variant="contained" onClick={editStudent}>
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <h3>STUDENT MANAGEMENT</h3>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button variant="contained" onClick={handleClickOpen}>
            Add
          </Button>
        </Toolbar>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">RollNo</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, id) => (
            <TableRow
              key={student.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="right">{student.name}</TableCell>
              <TableCell align="right">{student.rollNo}</TableCell>
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">
                <ModeEditIcon onClick={() => handleClickEdit(id)} />
                <DeleteIcon onClick={() => handleRemove(id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
