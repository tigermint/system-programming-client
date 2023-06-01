import * as React from 'react';
import styled from "styled-components";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import { Box } from "@mui/material";
import ButtonAppBar from "../components/ButtonAppbar";
import ContentList from "../components/ContentList";
import FormDialog from '../components/FormDialog';

import getTasks from "../apis/category"
import { useEffect } from 'react';



const Wrapper = styled.div`
   height: 100vh;
`;
const Footer = styled(Box)`
    position: fixed;
    bottom: 0;
`;

const data = [{ title: "시스템 프로그래밍", content: "Lab14 하고 놀기", date: "2021-10-10", together: "서영균", category: "Family", schedule_check: "Today" },
{ title: "시스템 프로그래밍", content: "Lab14 하고 놀기", date: "2021-10-10", together: "서영균", category: "Family", schedule_check: "Scheduled" },
{ title: "시스템 프로그래밍", content: "Lab15 하고 놀기", date: "2023-06-01", together: "서영균", category: "Family", schedule_check: "Finished" },
{ title: "시스템 프로그래밍", content: "Lab14 하고 놀기", date: "2021-10-10", together: "서영균", category: "School", schedule_check: "Finished" }];




const MainPage = ({ name }) => {
    const [value, setValue] = React.useState('family');
    // const [data, setData] = React.useState([]);

    // useEffect(() => {
    //     getTasks("choi").then((response => {
    //         console.log(response)
    //         setData([...response.tasks, data]);
    //     }))
    // }, [data]);

    return (
        <Wrapper>
            <ButtonAppBar />
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={"5vh"}>
                {
                    value === 'family' ? <ContentList data={data.filter((value) => value.category === "Family")} /> :
                        value === 'school' ? <ContentList data={data.filter((value) => value.category === "School")} /> :
                            value === 'friend' ? <ContentList data={data.filter((value) => value.category === "Friend")} /> : null
                }
            </Box>
            <Box display={"flex"} justifyContent={"center"} marginTop={"40vh"}>
                <FormDialog />
            </Box>
            <Footer>
                <LabelBottomNavigation value={value} setValue={setValue} />
            </Footer>
        </Wrapper >
    );
};
export default MainPage;