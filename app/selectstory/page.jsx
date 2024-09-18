"use client";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";

export default function SelectStory() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <title>Best Personalized Stories for Kids | StoryNest Kids</title>
      <div className="w-full max-w-md mx-auto mb-8">
        <h1 className="text-4xl text-center font-extrabold text-gray-800 mb-6">
          Now Let's Create Our Story ✨
        </h1>
        <img
          src="/images/kid-story2.png"
          alt="kids story"
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>
      <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg w-full max-w-md">
        <Formik
          initialValues={{ name: "", type: "Funny story" }}
          onSubmit={(values, { setSubmitting }) => {
            const { name, type } = values;

            // Construct URL with query parameters
            const url = new URL("/story", window.location.origin);
            url.searchParams.append("name", name);
            url.searchParams.append("type", type);

            router.push(url.toString());

            setSubmitting(false); // Optional: stop form submission state
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-3"
                  placeholder="Enter the kid's name"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Select the type of the story
                </label>
                <Field
                  as="select"
                  name="type"
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-3"
                >
                  <option value="Funny story">Funny story</option>
                  <option value="Moral story">Moral story</option>
                  <option value="Scary story">Scary story</option>
                  <option value="Adventure story">Adventure story</option>
                  <option value="Fantasy story">Fantasy story</option>
                  <option value="Animal story">Animal story</option>
                  <option value="Fairy tale">Fairy tale</option>
                  <option value="Mystery story">Mystery story</option>
                  <option value="Superhero story">Superhero story</option>
                  <option value="Friendship story">Friendship story</option>
                  <option value="Science fiction story">Science fiction story</option>
                  <option value="Bedtime story">Bedtime story</option>
                  <option value="Historical story">Historical story</option>
                </Field>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-semibold rounded-lg text-lg px-6 py-3 transition-transform transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create Story"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
