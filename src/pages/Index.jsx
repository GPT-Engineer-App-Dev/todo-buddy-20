import { useState, useRef } from "react";
import { Box, Input, Button, List, ListItem, IconButton, Text, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTask = () => {
    if (input.trim() === "") {
      toast({
        title: "No task entered",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTask = {
      id: Date.now(),
      text: input,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  return (
    <Box p={5} display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box display="flex" mb={4}>
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} />
        <Button leftIcon={<FaPlus />} ml={2} onClick={handleAddTask} colorScheme="blue">
          Add
        </Button>
      </Box>

      <List spacing={3} flex="1">
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" alignItems="center" justifyContent="space-between" p={2} boxShadow="md">
            <Text as={task.isCompleted ? "s" : ""} fontSize="lg">
              {task.text}
            </Text>
            <Box>
              <IconButton icon={<FaCheck />} mr={2} onClick={() => handleToggleComplete(task.id)} colorScheme={task.isCompleted ? "green" : "gray"} aria-label="Complete task" />
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" aria-label="Delete task" />
            </Box>
          </ListItem>
        ))}
      </List>
      <Box mt={10} p={4} bg="gray.100" textAlign="center">
        <Text>© 2023 My Todo App</Text>
      </Box>
    </Box>
  );
};

export default Index;
