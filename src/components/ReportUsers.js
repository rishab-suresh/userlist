import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import Calendar from '../images/calendar icon.svg'
import RightArow from '../images/arrow.svg'
import Leftarrow from '../images/leftarr.svg'
import Send from '../images/send.svg'


export const ReportUsers = () => {

    const data = []
    const [chat, setChat] = useState(false)

    const chatData = [
        {
            fromMe: true,
            text: 'This could mean the end of the bana daquiri as we know it...also life.'
        },
        {
            fromMe: true,
            text: 'This could mean the end of the bana daquiri as we know it...also life.'
        },
        {
            fromMe: false,
            text: "Oh my God! It's out of ice! Like some outer space Motel"
        }
    ]

    for (let i = 0; i < 7; i++) {
        data.push({
            date: '12 Jan 2021',
            name: 'Shane Wagner',
            text: 'Some dummy text',
            image: `https://randomuser.me/api/portraits/men/${i}.jpg`
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#03021B',
            padding: '30px',
        }}>
            <h1 style={{
                color: '#fff',
                paddingBottom: '30px'
            }}>
                Report Users
            </h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>

                {/* left side */}
                <div style={{
                    backgroundColor: '#242437',
                    width: '60%',
                    height: '80vh',
                    padding: '25px',
                    marginRight: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                }}>

                    {/* left side header */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <h3 style={{
                            color: '#fff',
                        }}>
                            14 Reports
                        </h3>
                        <Button variant="light" style={{
                            alignItems: 'center'
                        }}>
                            <img src={Calendar} style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px'
                            }}/>
                            13-Jan-2021
                        </Button>
                    </div>

                    {/* left side body */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '20px',
                    }}>
                         {data.map((item, index) => {
                            return (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid #fff',
                                    marginBottom: '20px',
                                    alignItems: 'center',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: '10px',
                                        width: '100%',
                                        alignItems: 'center',
                                    }}>
                                        <div>
                                            <h5 style={{
                                                color: '#fff',
                                                marginRight: '20px'
                                            }}>
                                                {item.date}
                                            </h5>
                                        </div>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50px',
                                            overflow: 'hidden',
                                            marginRight: '20px',
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <p style={{
                                                color: '#A5A5AE',
                                                marginBottom: '5px',
                                            }}>
                                                {item.name}
                                            </p>
                                            <p style={{
                                                color: '#fff',
                                                marginBottom: '0px',
                                            }}>
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>

                                    <img src={RightArow} style={{
                                        width: '20px',
                                        height: '20px',
                                    }}/>
                                </div>
                            )
                         })}   
                    </div>


                </div>

                {/* right side */}

                {
                    chat ? (
                        <div style={{
                            backgroundColor: '#242437',
                            width: '40%',
                            height: '80vh',
                            padding: '25px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',

                            }}>
                                <img src={Leftarrow} onClick={() => setChat(false)} style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '10px'
                                }}/>

                                <h3 style={{
                                    color: '#fff',
                                }}>
                                    Chat
                                </h3>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: 'auto',
                                borderBottom: '1px solid #fff',
                            }}>
                                {chatData.map((item, index) => (
                                    item.fromMe ? (
                                        <div key={index} style={{
                                            backgroundColor: '#FCFCFD',
                                            width: '50%',
                                            paddingLeft: '10px',
                                            paddingRight: '10px',
                                            borderRadius: '10px',
                                            marginLeft: 'auto',
                                            marginBottom: '20px'
                                        }}>
                                            <p>
                                                {item.text}
                                            </p>
                                        </div>
                                    ) : (
                                        <div key={index} style={{
                                            backgroundColor: '#787C8EAB',
                                            width: '50%',
                                            paddingLeft: '10px',
                                            paddingRight: '10px',
                                            borderRadius: '10px',
                                            marginBottom: '20px',
                                            color: '#FCFCFD'
                                        }}>
                                            <p>
                                                {item.text}
                                            </p>
                                        </div>
                                    )
                                ))}
                            </div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: '20px',
                            }}>
                                <input type="text" placeholder="Type something" style={{
                                    width: '93%',
                                    height: '40px',
                                    backgroundColor: '#787C8E87',
                                    fontSize: '16px',
                                    borderRadius: '10px',
                                    padding: '5px',
                                    border: '1px solid #fff',
                                }} />

                                <img src={Send} stye={{
                                    width: '5%',
                                    height: 'auto',
                                }} />
                            </div>

                        </div>

                    ) : (
                        <div style={{
                            backgroundColor: '#242437',
                            width: '40%',
                            height: '80vh',
                            padding: '25px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: '20px',
                                borderBottom: '1px solid #fff',

                            }}>
                                <img src={data[0].image} style={{
                                    height: '50px',
                                    width: '50px',
                                    borderRadius: '50px',
                                    overflow: 'hidden',
                                    marginRight: '30px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}/>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <h2 style={{
                                            color: '#fff',
                                            marginRight: '20px',
                                            marginBottom: '0px',
                                        }}>
                                            {data[0].name}
                                        </h2>
                                        
                                        <h2 style={{
                                            color: '#FCFCFD99',
                                            marginBottom: '0px',
                                        }}>
                                            {'(Reported by)'}
                                        </h2>
                                    </div>

                                    <p style={{
                                        color: '#787C8E',
                                    }}>
                                        {data[0].date}
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: '#fff',
                            }}>
                                <h2>
                                    {'Report issue'}
                                </h2>
                                <p>
                                    {"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"}
                                </p>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: '20px',

                            }}>
                                <img src={data[0].image} style={{
                                    height: '50px',
                                    width: '50px',
                                    borderRadius: '50px',
                                    overflow: 'hidden',
                                    marginRight: '30px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}/>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <h2 style={{
                                            color: '#fff',
                                            marginRight: '20px',
                                            marginBottom: '0px',
                                        }}>
                                            {data[0].name}
                                        </h2>
                                        
                                        <h2 style={{
                                            color: '#FCFCFD99',
                                            marginBottom: '0px',
                                        }}>
                                            {'(Reported to)'}
                                        </h2>
                                    </div>

                                    <p style={{
                                        color: '#787C8E',
                                    }}>
                                        {data[0].date}
                                    </p>
                                </div>

                                <div onClick={() => setChat(true)} style={{
                                    backgroundColor: '#DA0037',
                                    width: '150px',
                                    height: '50px',
                                    borderRadius: '30px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff',
                                    display: 'flex',
                                    marginLeft: 'auto',
                                }}>
                                    <h4>
                                        Chat
                                    </h4>
                                </div>
                            </div>

                            <div style={{
                                flexDirection: 'row',
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 'auto'
                            }}>
                                <div onClick={() => setChat(true)} style={{
                                    backgroundColor: '#DA0037',
                                    width: '45%',
                                    height: '50px',
                                    borderRadius: '30px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff',
                                    display: 'flex',
                                    marginLeft: 'auto',
                                }}>
                                    <h4>
                                        Deny
                                    </h4>
                                </div>

                                <div onClick={() => setChat(true)} style={{
                                    backgroundColor: '#DA0037',
                                    width: '45%',
                                    height: '50px',
                                    borderRadius: '30px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff',
                                    display: 'flex',
                                    marginLeft: 'auto',
                                }}>
                                    <h4>
                                        Block Account
                                    </h4>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}