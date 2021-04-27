import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";

const useFirestore = collection => {
	const [documents, setDocuments] = useState(null);
	useEffect(() => {
		const unsub = firestore.collection(collection).onSnapshot(snap => {
			let documents = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
			console.log(documents);
			setDocuments(documents);
		});

		return () => unsub();
	}, [collection]);

	return [documents];
};

export default useFirestore;
