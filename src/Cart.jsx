import React from 'react'

function Cart() {
    return (
        <div>
            <form class="row g-3 needs-validation" novalidate>

                <label for="validationCustom01" class="form-label">First name</label>
                <input type='text' className='form-control' id="validationCustom02" required />

                <button class="btn btn-primary" type="submit">Submit form</button>
            </form>

        </div>
    )
}

export default Cart