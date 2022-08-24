import { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

function SearchBar({onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('')
 const submitHandler = (e)=>{
    e.preventDefault()
 onSubmit(searchTerm)
 }
    return (
        <Form onSubmit={submitHandler}>
            <InputGroup className="mb-3">
                <Form.Control type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

                <Button type="submit" variant="danger"> Search</Button>

            </InputGroup>
        </Form>
    )
}
export default SearchBar