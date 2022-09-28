import React from 'react'

import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";

import { fetchProductList } from "../../api";
import { Card } from "../../components/Card";


function Products() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status
    } = useInfiniteQuery("products", fetchProductList, {
        getNextPageParam: (lastGroup, allGroups) => {
            const morePagesExist = lastGroup?.length === 12;

            if(!morePagesExist){
                return;
            }

            return allGroups.length + 1;
        },
    });

    if(status === "loading") return "loading";

    if(status === "error") return "An error has occured " + error.message;
  return (
    <div>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                {group.map((item)=> (
                <Box w="100%" key={item._id}>
                    <Card item={item} />
                </Box>))}
                </React.Fragment>
            ))}
        </Grid>

        <Flex mt="10" justifyContent="center">
            
        </Flex>
    </div>
  )
}

export default Products