import { Button, Row, Input, Text, Column, List, Logo, Icon } from 'components';
import React, { useCallback, useMemo, useState } from 'react'

const secondsDefault = 3;

const Home = () => {
  const [taskName, setTaksName] = useState('');
  const [task, setTask] = useState<{ label: string | undefined}[]>([]);
  const [seconds, setSeconds] = useState(secondsDefault);
  const [timer, setTimer] = useState<any>();
  const [stage, setStage] = useState('ready');

  const handleSubmit = () => {
    if (!taskName) return;
    
    setTask(previous => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    })
    setTaksName('');
  };
  // Converte o tempo os segundos recebidos em minutos e segundos certos
  const secondsToTime = (sec: number) => {
    const divisorMinuts = sec % 3600;

    const minutes = Math.floor(divisorMinuts / 60);
    const seconds = Math.ceil(divisorMinuts % 60);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  // Seta o valor q colocou como padrão no useStat - 1
  const startTimer = () => {
    setStage('in_progress');
    const timerInterval = setInterval(() => {
      setSeconds((previosSeconds) => {
        if(previosSeconds === 0) {
          clearInterval(timerInterval);
          setTimer(undefined);
          setStage('finished');
          return 0;
        }
        return previosSeconds - 1
      })
    }, 1000)

    setTimer(timerInterval);
  }

  
  const handlePauseButton = useCallback(() => {
    clearInterval(timer);
    setTimer(undefined);
  }, [timer]);
  
  const handleRestartButton = useCallback(() => {
    setStage('ready');
    handlePauseButton()
    setSeconds(secondsDefault);
  }, [handlePauseButton])

  const handleStopButton = useCallback(() => {
    setStage('ready')
    handlePauseButton();
    setSeconds(secondsDefault);
  }, [handlePauseButton])

  const handleStage = useMemo(() => {
    switch (stage) {
      case 'ready':
        return 'Ready';
      
      case 'in_progress':
        return 'Time to work';
      
      case 'finished':
        return 'Finishid';

      default:
        return 'Ready';
    }
  }, [stage])

  const handleStageButtons = useMemo(() => {
    switch (stage) {
      case 'ready':
        return (
          <>
            <Button variant='primary' onClick={startTimer}>
              <Text fontSize='bodyExtraLarge' fontFamily='secundary' fontWeight='bold' color='primary'>Start</Text>
            </Button>
          </>
        );

      case 'in_progress':
        return (
          <>
            <Row py='20px'>
              <Button variant='primary' p='10px 20px' mx='5px' onClick={startTimer}>
                <Icon variant='play'/>
              </Button>
              <Button variant='primary' p='10px 20px' mx='5px' onClick={handlePauseButton}>
                <Icon variant='pause'/>
              </Button>
              <Button variant='primary' p='10px 20px' mx='5px' onClick={handleStopButton}>
                <Icon variant='stop'/>
              </Button>
            </Row>
          </>
        );

      case 'finished':
        return (
          <>
            <Row py='20px'>
            <Button variant='primary' p='10px 20px' mx='5px' onClick={handleRestartButton}>
                <Icon variant='restart'/>
              </Button>
              <Button variant='primary' p='10px 20px' mx='5px'>
                <Icon variant='done'/>
              </Button>
            </Row>
          </>
        );
    
      default:
        return (
          <>
            <Button variant='primary' onClick={startTimer}>
              <Text fontSize='bodyExtraLarge' fontFamily='secundary' fontWeight='bold' color='primary'>Start</Text>
            </Button>
          </>
        );
    }
  }, [stage, handlePauseButton, handleStopButton, handleRestartButton])

  return (
    <Column width="600px" margin="0 auto">
      <Column width="100%" alignItems="center" py="25px">
        <Logo />
      </Column>
      <Column width="100%" height="350px" p='20px' bg="rgba(255, 255, 255, 0.2)" borderRadius="4px" alignItems='center'>
          <Text fontFamily='secundary' fontSize='bodyExtraLarge'>{handleStage}</Text> 
          <Text fontFamily='secondary' fontSize='displayExtraLarge' fontWeight='bold' py='30px'>{secondsToTime(seconds)}</Text>
          {handleStageButtons}
      </Column>
      <Text my="10px" fontSize="bodyLarge" paddingLeft="2px" fontWeight="bold">Tasks</Text>
      <Row width="100%">
        <Input flex={1} placeholder='Enter a new Task' value={taskName} onChange={(e: any) => setTaksName(e.target.value)}/>
        <Button onClick={handleSubmit}>ok</Button>
      </Row>
      <List itens={task} />
    </Column>
  )
}

export default Home;