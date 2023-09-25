<template>
    <div>
        <!-- contact page start  -->
        <div class="my-5">
            <h1 class="text-danger text-center">Contact me !</h1>
        </div>
        <main class="mt-5">
            <div class="container-lg ">
                <div class="row">
                    <div class="col-3 offset-1 my-5">

                        <div class=" shadow-sm rounded-6 m-3  p-1">
                            <h5 class="mx-3 text-white"><i class="fa-solid fa-phone me-3 text-success"></i>phone</h5>
                            <p class="mx-5 text-white">09681586221</p>
                        </div>
                        <div class="shadow-sm rounded-6 m-3  p-1">
                            <h5 class="mx-3 text-white"><i class="fa-solid fa-envelope me-3 text-danger"></i>Gmail</h5>
                            <p class="mx-3 text-white">laminkhatn174@gmail.com</p>
                        </div>
                        <div class=" shadow-sm rounded-6 m-3  p-1">
                            <h5 class="mx-3 text-white"><i class="fa-brands fa-facebook me-3 text-primary"></i>facebook</h5>
                            <p class="mx-5 text-white">Kyaw lamin khant</p>
                        </div>
                        <div class=" shadow-sm rounded-6 m-3  p-1">
                            <h5 class="mx-3 text-white"><i class="fa-brands fa-viber me-3 text-white"></i>Viber</h5>
                            <p class="mx-5 text-white">09255267784</p>
                        </div>
                        <div class=" shadow-sm rounded-6 m-3  p-1">
                            <h5 class="mx-3 text-white"><i class="fa-brands fa-telegram me-3 text-info"></i>Telegram</h5>
                            <p class="mx-5 text-white">@Kyawll21</p>
                        </div>
                    </div>
                    <div class="col-8  mt-5 mb-5 ">
                        <!-- Section: Design Block -->
                        <section class="text-center">
                            <div class="card mx-4 mx-md-5 shadow-5-strong">
                                <div class="card-body py-5 px-md-5">

                                    <div class="row d-flex justify-content-center">
                                        <div class="col-lg-8">
                                            <h2 class="fw-bold mb-5">Contact</h2>
                                            <form>
                                                <!-- 2 column grid layout with text inputs for the first and last names -->
                                                <div class="row">
                                                    <div class="col-md-6 mb-4">
                                                        <div class="form-outline">
                                                            <input type="text" id="form3Example1" class="form-control" />
                                                            <label class="form-label" for="form3Example1">First name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mb-4">
                                                        <div class="form-outline">
                                                            <input type="text" id="form3Example2" class="form-control" />
                                                            <label class="form-label" for="form3Example2">Last name</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Email input -->
                                                <div class="form-outline mb-4">
                                                    <input type="email" id="form3Example3" class="form-control" />
                                                    <label class="form-label" for="form3Example3">Email address</label>
                                                </div>

                                                <!-- Password input -->
                                                <div class="form-outline mb-4">
                                                    <input type="password" id="form3Example4" class="form-control" />
                                                    <label class="form-label" for="form3Example4">Password</label>
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <textarea name="" id="form3Example4" class="form-control" cols="20"
                                                        rows="5"></textarea>
                                                    <label class="form-label" for="form3Example4">Message</label>
                                                </div>

                                                <!-- Submit button -->
                                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                                    Contact Us
                                                </button>

                                                <!-- Register buttons -->
                                                <div class="text-center">
                                                    <p>or contact up with:</p>
                                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                                        <i class="fab fa-facebook-f"></i>
                                                    </button>

                                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                                        <i class="fab fa-google"></i>
                                                    </button>

                                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                                        <i class="fab fa-twitter"></i>
                                                    </button>

                                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                                        <i class="fab fa-github"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Section: Design Block -->
                    </div>
                </div>
            </div>
        </main>
        <!-- contact page end -->
    </div>
</template>

<script>
export default {
    name: 'contantView'
}
</script>
