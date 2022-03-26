import styled from "styled-components";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
      </Header>
      {/* Searchbar */}
      {/* Chat Elements */}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;
