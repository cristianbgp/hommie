import Layout from "../../components/layout";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Textarea,
} from "@chakra-ui/core";
import Router from "next/router";

export default function NewTask() {
  const [isLoading, setIsLoading] = useState(false);

  function handleOnSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    if (title.trim() === "") {
      setIsLoading(false);
      return;
    }

    fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
    }).then(() => {
      setIsLoading(false);
      Router.push("/");
    });
  }

  return (
    <Layout>
      <>
        <Heading as="h3" size="lg" marginTop="4">
          Add a new task
        </Heading>

        <form onSubmit={handleOnSubmit}>
          <FormControl marginTop="4">
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input id="title" placeholder="A new thing I should do" />
          </FormControl>
          <FormControl marginTop="4">
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              placeholder="You can write a description if you want"
              size="sm"
            />
          </FormControl>

          <Button
            mt={4}
            variantColor="gray"
            isLoading={isLoading}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </>
    </Layout>
  );
}
