import { useState, useEffect } from 'react';

import styled from "styled-components"
import waterFall from './waterfall.jpeg';

import { FaArrowRight, FaRegHeart, FaHeart, FaBars, FaRegCommentAlt, FaCommentAlt, FaTimes, FaRegPaperPlane} from 'react-icons/fa';

const Card = () => {
    const [profileToggled, setProfileToggled] = useState(false);
    const [navToggled, setNavToggled] = useState(false);
    const [chatToggled, setChatToggled] = useState(false);
    const [addToggle, setAddToggle] = useState(false);
    const [chatIconToggle, setChatIconToggle] = useState(false);
    const [message, setMessage] = useState('');

    const handleMessage = e => {
        setMessage(e.target.value);
        console.log(message);
    }

    const onProfileToggle = () => {
        setProfileToggled(!profileToggled);
    };

    const onAddToggle = () => {
        setAddToggle(!addToggle);
    };

    const onNavToggle = () => setNavToggled(!navToggled);

    const onChatToggle = () => {
        setChatToggled(!chatToggled);
        setMessage("");
    };

    const toggleChatIcon = () => setChatIconToggle(!chatIconToggle);

    return (
        <StyledCard>
        {profileToggled && (
            <Navbar>
                <NavContainer>
                    <span onClick={onNavToggle}><FaBars/></span>
                    {chatToggled ? <FaTimes onClick={onChatToggle} style={{fontSize: "1.35rem", color: "#eee", zIndex: "99", cursor: "pointer" }}/> : <span onClick={setChatToggled} onMouseEnter={toggleChatIcon} onMouseLeave={toggleChatIcon}>{ chatIconToggle ? <FaCommentAlt /> : <FaRegCommentAlt /> }</span>}
                </NavContainer>
            </Navbar>
        )}
        {!profileToggled && (
            <>
            <Image src={waterFall} />
            <SplashHeading>
                <h2>Kev <br/> Brooke</h2>
                <button onClick={onProfileToggle}>profile <FaArrowRight style={{marginLeft: ".5rem"}}/></button>
            </SplashHeading>
            </>
        )}
        {/* Image Section */}
        {profileToggled && (
            <>
            <ImageContainer bg={waterFall}>
                {navToggled && (
                    <Popup onClick={onNavToggle}>
                        <span onClick={onProfileToggle}>Go Back</span>
                        <span>Visit Kev's website</span>
                    </Popup>
                )}

                {chatToggled && (
                    <QuickChat>
                        <InputContainer>
                            <Input onChange={handleMessage} placeholder="Say hi 👋 " />
                            {message.length > 0 && <SendBtn><FaRegPaperPlane/></SendBtn>}
                        </InputContainer>
                    </QuickChat>
                )}

                {addToggle && (
                    // 
                    <Notification className="animate__animated animate__fadeOut animate__delay-2s">
                        <IconBg/>
                        Added Kev B. to your favorites
                    </Notification>
                )}
            </ImageContainer>
            {/* Content Section */}
            <ContentContainer>
                <Add onClick={onAddToggle}>{addToggle ? <FaHeart/> : <FaRegHeart/>}</Add>
                <Header>
                    <h3>Kev Brooke</h3>
                    <p>Lead Design @<b><a href="#">Spotify</a></b></p>
                    
                </Header>
                <footer>
                    <Flex>
                        <Col>
                            <h4>Followers</h4>
                            <span>112k</span>
                        </Col>
                        <Col>
                            <h4>Following</h4>
                            <span>314</span>
                        </Col>
                    </Flex>
                </footer>
            </ContentContainer>
            </>
        )}
        </StyledCard>
    )
}

const Navbar = styled.div`  
    position: absolute;
    width: 100%;
    height: 56px;
    top: 0;
    background: transparent;
    z-index: 99;
`;

const NavContainer = styled.div`
    max-width: 85%;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        color: #eeeeee;
        font-size: 1.35rem;
        cursor: pointer;
    }
`;

const Popup = styled.div`
    height: auto;
    width: 200px;
    position: absolute;
    top: 12%;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: rgba(255,255,255,.85);
    padding: 1rem;
    color: #222;
    border-radius: 18px;
    z-index: 99;

    span {
        padding: .25rem;
        margin: .25rem 0;
        cursor: pointer;
    }
`;

const StyledCard = styled.div`
    height: 500px;
    max-width: 100%;
    width: 350px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 5px 10px 20px rgba(0,0,0,.2);
    overflow: hidden;
    position: relative;
`;

const SplashHeading = styled.div`
    position: absolute;
    top: 15%;
    left: 10%;
    padding: 1rem;
    line-height: 1;

    h2 {
        font-size: 4.5rem;
        color: #fff;
        font-weight: 500;
        letter-spacing: 1px;
    }

    button {
        outline: none;
        min-width: 120px;
        padding: .75rem;
        background: transparent;
        border: 1.5px solid #fff;
        border-radius: 22px;
        margin-top: 2rem;
        font-size: .9rem;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    height: 55%;
    background: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    display: grid;
    place-items: center;
`;

const ContentContainer = styled.div`
    height: 50%;
    position: relative;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Poppins';
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
        
        h3 {
            font-weight: 400;
            font-size: 1.75rem;
            text-transform: uppercase;
            color: #444;
        }

        p {
            font-size: .9rem;
            margin-top: .25rem;
            font-weight: lighter;
            color: #555555;

            a {
                text-decoration: none;
                color: inherit;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    border-top: 1px solid #eee;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        font-weight: 300;
        font-size: 1rem;
        color: #555555;
    }

    span {
        font-family: 'Fairplay Display';
        font-size: 2.5rem;
    }
`;

const Add = styled.div`
    position: absolute;
    top: -25px;
    left: 5%;
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: rgb(255, 90, 90);
    color: #fff;
    box-shadow: 1px 5px 12px rgba(255, 90, 90, .7);
    cursor: pointer;
    transition: .1s all ease-in-out;
    z-index: 9;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 2px 7px 16px rgba(255, 90, 90, .7);
    }
`;

const Notification = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    text-align: center;
    font-size: 2rem;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(12px);
    color: #ffffff;
    z-index: 1;
    overflow: hidden;
    position: relative;
`;

const IconBg = styled(FaRegHeart)`
    position: absolute;
    font-size: 15rem;
    color: rgba(255,255,255,.075);
`;

const QuickChat = styled.div`
    position: absolute;
    display: grid;
    place-items: center;
    text-align: center;
    font-size: 2rem;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(12px);
    color: #ffffff;
    z-index: 9;
    overflow: hidden;
    position: relative;
`;

const InputContainer = styled.div`
    display: flex;
    margin-top: 2rem;
`;

const Input = styled.input`
    padding: .75rem;
    border: none;
    outline: none;
    font-size: 1.15rem;
    border-radius: 22px;
    background: rgba(0,0,0,.4);
    color: #eeeeee;

    &::placeholder {
        color: #eeeeee;
    }
`;

const SendBtn = styled.button`
    outline: none;
    border: none;
    padding: .75rem;
    background: none;
    color: #eeeeee;
    font-size: 1.25rem;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    display: grid;
    place-items: center;
`;

export default Card
