import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'


const NavBar = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <header className='sticky top-0 flex flex-row items-center justify-between max-w-3xl mx-auto
    z-20 xl:items-center p-5'> 
      <div className='flex row items-center space-x-2'>
        <Button variant={"clear"} onClick={onOpen} className="flex flex-row space-x-2 items-center hover:text-slate-700">
          <FaEnvelope size={32}/>
          <p className="text-xl">Contact Me</p>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Title</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <p>Hello</p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
      <div className='flex flex-row items-center cursor-pointer space-x-2'>
        <a href="https://github.com/j-papineau" target="_blank" className="hover:text-slate-700">
          <FaGithub size={32}/>
        </a>
        <a href="https://www.linkedin.com/in/joel-papineau-58a4801b4/" target="_blank" className="hover:text-slate-700">
          <FaLinkedin size={32}/>
        </a>
      </div>
    </header>
  )
}

export default NavBar