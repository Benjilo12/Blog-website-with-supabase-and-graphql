import { Button, Modal } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";

function CustomModal({ openModal, setOpenModal }) {
  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <h1 className="font-bold text-center">Subscribe to our newsletter</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="max-w-lg">
              <div className="mb-2 block">
                <Label
                  className="text-2xl font-bold"
                  htmlFor="email3"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email3"
                type="email"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Subscribe</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;
