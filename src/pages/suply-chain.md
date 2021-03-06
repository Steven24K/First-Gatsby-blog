---
title: "The suply chain of crypto currency"
date: "2018-06-06"
---

## Supply Chain Management

### <i>Executive summary</i>

<b>Authors:</b>
- Jürgen van der Heiden
- Abdulvahid Kiliç 
- Steven Koerts

## Introduction 

This rapport will show how different blockchains can be deployed for supply chain management. Because of the differences between blockchains it is unlikely that one blockchain suits all supply chain managements. Within this rapport VeChain, Modum, WaBi and WaltonChain will be used to illustrate the difference between blockchains by describing their characteristics. An example will be shown, as how a blockchain could be deployed for the supply chain of a company. Deploying a blockchain also comes with disadvantages, those disadvantages will be mentioned.

Logistics systems are commonly complex and there are always many parties involved. The supply chain management of companies each differ from one another. Because of the differences between blockchains it probably is not that one blockchain suits all supply chain managements. The quality of the products and the delivery time needs to be maintained. But that does not take away the problem of counterfeits and fake (parts of) products. All these problems have a simple solution which can be solved by using a blockchain. 


## Differences between blockchain

VeChain makes use of its VeChain Identity (VID) technology – this technology will be used to mark and track a product. VIDs have a hash function that uses the encryption SHA256. This encryption generates a random hash value that corresponds to a VID. A VID can be written into a Near Field Communication (NFC) tag, Quick Response (QR) code, or Radio Frequency Identification (RFID) tag, to be used for a product. This enables a tagged product to correspond with the information for that product, within the blockchain [1]. VeChain also supports authorization based on digital ownership management. Which means that every ownership of a product will be represented digitally on the platform. By the usage of the smart contract technology an account will possess both a public and private key [1].

Modum was developed for the pharmaceutical industry as they have special needs. To name an example, pharmaceutical companies must employ expensive temperature-stabilized trucks, as certain medicine may not be exposed to certain temperature. Modum records all data within the blockchain, ensuring full transparency, accountability and data integrity. If there is a temperature deviation at any point during the entire process, the sender/receiver will get a notification to inform them of the anomaly. This represents a cost-effective way of monitoring temperature changes along the medicinal supply chain. [2]

WaBi is a digital cryptocurrency that is able to serve as an anti-counterfeit system. This is done by keeping accurate tabs on product sales and similar market data. WaBi uses a digital linking system that connects digital and physical assets through the use of RFID labels. These labels come with features such as: anti-copy functionality, real-time authentication capabilities and remote tracking. By using WaBi, customers will be able to track an array of consumer products. This platform is available as a phone application. [3]

WaltonChain combines both RFID and blockchain technology to help manage supply chains. This decentralizes the supply chain, providing information on the product’s history, and decentralizing the network to access and store this information. RFID reader chips and RFID tag chips need to be built that are utilized in the Walton blockchain. The reader should be considered as the node of the chain, while the tags are the devices that are connected to the chain. It is this RFID hardware system which makes Waltonchain fitting for business models, as it can prevent bottlenecking in commercial applications on the blockchain. [4]

Devery contains an own verification protocol for products. Because of this a business can only ensure its authenticity through the process of finding suppliers. This process ensures supply agreements are honored and prevent counterfeit supply agreements. Products can be sold using this platform, while ensuring the supply chain is secure. The benefits for consumers is legitimate before it is posted to them. [5]


## Graphic comparison

The following table illustrates which blockchain fits a characteristic the best. This is based on the previously mentioned text that is based on several sources. 

<table>
   <thead>
      <tr>
         <th></th>
         <th>VeChain</th>
         <th>Modum</th>
         <th>WaBi</th>
         <th>Waltonchain</th>
         <th>Devery</th>
      </tr>
   </thead>

   <tbody>
       <tr>
         <th>Security</th>
         <th>X</th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
      </tr>
             <tr>
         <th>Tracking</th>
         <th></th>
         <th>X</th>
         <th></th>
         <th></th>
         <th></th>
      </tr>
             <tr>
         <th>Anti-counterfeit</th>
         <th></th>
         <th></th>
         <th>X</th>
         <th></th>
         <th></th>
      </tr>
             <tr>
         <th>Own hardware</th>
         <th></th>
         <th></th>
         <th></th>
         <th>X</th>
         <th></th>
      </tr>
             <tr>
         <th>Verification protocol</th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
         <th>X</th>
      </tr>
   </tbody>
</table>

## Implementing blockchain

To illustrate the differences between the several blockchains, this chapter will explain how the blockchains could benefit a fictional company that sells luxury clothing. This fictional company will be named Dutch Clothing (DC).

The working of DCs supply chain, will be based on the commonalities that can be found within the luxury clothing industry. The commonalities are that their customers want transparency on how the product is made and a need for sustainable production. [7] With sustainable products is meant that there is an automatic supply chain system on the cloud. [8] By automatizing the supply chain the paperwork of shipment will be reduced, the courier cost will be minimized and issues are identified faster. [9]

As mentioned the named blockchains are fit to be used for supply chain management. When comparing several of these blockchains, for example WaltonChain and VeChain, there are similarities to be found. [10] However, choosing the correct blockchain is an important decision to be made. [11] A general description will be given on how a blockchain can be implemented for the use of supply chain. Afterwards the advantages of implementing the named blockchains will be given.

DC’s current supply chain data is kept with the use of a database. The database can be integrated into the blockchain. This can be done by uploading a CSV-file, manually or otherwise. Giving the employees time to familiarize themselves with blockchain is of importance. The transaction should then not be instant but should be divided into sprints. A smart contract will need to be made, which among other things will help automate the workflow between parties. Blockchain will come with some data sharing problems. The IT department needs to have skilful employees to partially prevent this problem and solve the other part of the problem. This will require DC to invest in their IT department. After implementing a blockchain immediate benefits of the supply chain will be decentralization, better security and real-time updates. [12]

VeChain enables a different kind of encryption and enables ownership per product. [1] Every product of this chain will have one owner and does not need a special kind of encryption.

Modum enables to precisely note all details of a shipment. [2] This will result in more transparency. More transparency is required by the customers of luxury brands. [6] However, this extra information is not relevant for the customers of DC.

WaBi enables to reduce the chance of counterfeits. [3] This extra security of ensuring the authenticity of the clothing will benefit DC.

WaltonChain comes with their own hardware and reduce the chances of technical bottlenecks in commercial applications. [4] Bottlenecks can occur within blockchains and the solution to these problems are not always clear. [13]  

Devery comes with their own verification protocol to ensure the authenticity of the products within the supply chain. [5] Like WaBi this blockchain will give extra security of ensuring that the clothing is authentic and that will benefit DC.


## Supply chain issues

A product will exist of multiple parts or materials that require different suppliers. Latency in receiving a needed good can result in extra expansions. The production of a product needs to be stopped, hence fewer products can be sold. To partially prevent this problem the supply chain of a company needs to be efficient in keeping an overview. An efficient supply chain can bring competitive and business advantages with them. [15]

Globalization is a challenge for supply chain management. Suppliers of products move there manufactures around the world to countries that offer benefits that will result in more profit. Importing supply across the world is a complicated process. The supply chain needs to deal with coordinations and collaborate with different parties across borders regarding manufacturing, storage and logistics. When choosing a supplier not only cost needs to be taken in account, but also the delivery time. [15]

Markets are moving faster with the developing technologies such as social media. This requires companies to have a shorter production cycle. As their supply chain needs to be agile in order to be able to change rapidly according to the chances within the market. Innovation requires a production cycle to change or stop. [15]

Supply chains are commonly known for a lack of transparency. There is often no guarantee that the quality of a part, component or a product is as it is labelled. During the production of a product a part can be replaced with a part of a different supplier. When replacing a part it is often not known by stakeholders. The lack of transparency of stakeholders may result that the inventory, shipments and other aspects of the supply chain is negatively impacted. [16]

Transparency is not the only issues of stakeholders. Sharing information can be done by letters, telex or other means of communication, like electronica interchanges as email. The sharing of information and format can be a challenge and miscommunication is not uncommon. [17]

Currency is constantly evolving and is caused by different factors. This will affect the cost of a product or good sold from a certain country. A cost of a product can change with more than 10 percent. Hence companies are forced to take into account that the exchange rates rapidly change. A short-term strategic plan and a supply chain that can realize the plan is required. [18]


## Conclusion

A supply chain can give a competitive advantage over the competition. An agile supply chain enables a company to change with the markets and globalization. [15] A customer or stakeholder often has no insight into a supply chain. The quality of a product cannot be predicted or guaranteed.[16] When a company tries to be transparent – miscommunication can occur and cause different kind of problems. [17] A blockchain enables a supply chain to become transparent and automate many aspects of the supply chain and resolve many of the named issues. [19]  

An example of the benefits will be illustrated by recommending a blockchain for the fictional company called Dutch Clothing (DC). DCs supply chain will be based on the commonalities found within supply chain management. Their supply chain has the following issues: Suppliers are spread out over the world and keep moving, also the global markets are changing faster because of technology. [15] Furthermore the lack of transparency is a big issue for many companies within the luxury clothing. [7]

Implementing a blockchain will result in automated transactions and the paperwork that comes with it. The paperwork will be accessible for everyone and the automatization will save DC money. [8] DCs current database, containing data about the supply chain, can be kept by uploading it to the blockchain. This can be done by a CSV-file. Another option is manually inserting the data. This will require an IT department that contains skilful employees that are familiar with blockchain. This may require that additional training must be made available for current employees. The implementation of a blockchain will result in many benefits, some are  immediate like decentralization, better security and real-time updates. [12] 

The named benefits are achievable by implementing a blockchain. When comparing VeChain, Modum, WaBi and WaltonChain it is clear that all come with the named benefits. However they do contain specific characteristics that distinguishes themselves from the others.

VeChain comes with SHA-256 encryption. [1] Modum notes small details during the transports of a product. [2] WaBi prevents the changes of counterfeits entering the supply chain. [3] 
WaltonChain has his own hardware that reduces the chances of bottlenecks within supply chain. [4] Devery has his own verification protocol that ensures that the products within the supply chain are authentic. [5] 

A common need in the luxury clothes industry is transparency. [7] With transparency a counterfeit can easily be detected by a customer or stakeholder. The chances of preventing a counterfeit to reach the store is not reduced by every blockchain. Because of this WaBi is recommended for DC, as it reduces the chances of counterfeits. [3]


### Sources

 Bisade Asolo, “What is VeChain”, mycryptopedia.com, january 5th 2018. [Online]. Available: https://www.mycryptopedia.com/vechain-ven-explained/ [Accessed at: may 17th 2018]
Aziz, “Token review: Modum analysis”, masterthecrypto.com, february 25th 2018. [Online]. Available: https://masterthecrypto.com/modum-analysis-modum-review/ [Accessed at: may 17th 2018]
Shiraz Jagati, “What is WaBi”, themerkle.com, february 22nd 2018. [Online] Available: https://themerkle.com/what-is-wabi/ [Accessed at: may 17th 2018]
Yuz, “What is Waltonchain”, steemit.com, november 3rd 2017. [Online]. Available: https://steemit.com/cryptocurrency/@yuz/what-is-waltonchain-wtc [Accessed at: may 17th 2018]
Cryptotec,,“What is Devery”, cryptotec.com, january 3rd 2018. [Online]. Available: https://cryptostec.com/what-is-devery/ [Accessed at: may 17th 2018] 	
Hilary Milnes, “The supply chain is becoming part of luxury designers branding strategies”, digiday.com, november 13th 2018. [Online]. Available: https://digiday.com/marketing/supply-chain-becoming-part-luxury-designers-branding-strategies/ [Accessed at: may 24th 2018]
Gina Gulberti, “3 reasons the supply chain in the fashion industry is changing“, launchmetrics.com, january 16th 2018. [Online] Available: https://www.launchmetrics.com/resources/blog/fashion-industry-supply-chain [Accessed at: may 24th 2018]
Hilary Milnes, “The supply chain is becoming part of luxury designers branding strategies”, digiday.com, november 13th 2018. [Online]. Available: https://digiday.com/marketing/supply-chain-becoming-part-luxury-designers-branding-strategies/ [Accessed at: may 24th 2018]
Gina Gulberti, “3 reasons the supply chain in the fashion industry is changing“, launchmetrics.com, january 16th 2018. [Online] Available: https://www.launchmetrics.com/resources/blog/fashion-industry-supply-chain [Accessed at: may 24th 2018]
John Astrix, “Blockchain for supply chain”, ibm.com, november 4th 2018. [Online] Available:   https://www.ibm.com/blockchain/supply-chain/ [Accessed at: may 24th 2018]
WhistlerPedia, “Coin comparison: VeChain Thor vs WaltonChain”, medium.com, february 2018. [Online] Available:https://medium.com/@rizzla2/coin-comparison-vechain-thor-ven-vet-vs-waltonchain-wtc-effd2022a03a [Accessed at: may 24th 2018]
Deborah Catalano Ruriani, “Selecting a suply chain managment system”, inboundlogistics.com, february 2001. [Online] Available:  http://www.inboundlogistics.com/cms/article/selecting-a-supply-chain-management-system/ [Accessed at: may 27th 2018]
 Catherine Georga, “Blockchain vs database replace”, dzone.com, january 2018. [Online]. Avaliable: https://dzone.com/articles/blockchain-vs-database-replace-or-enhanc [Accessed at: may 27th 2018]
 Anonymous, “How can we clear blockchains technical bottlenecks”, btcmanager.com, march 6th 2018. [Online]. Available: https://btcmanager.com/can-clear-blockchains-technical-bottlenecks/ [Accessed at: may 27th 2018]
Andy Uhlenberg, “Key Issues in Supply Chain Management and How to Overcome Them”, liaison.com, septembre 6th 2018. [Online]. Available: https://www.liaison.com/blog/2017/09/18/key-issues-supply-chain-management-overcome/ [Accessed at: may 27th 2018]

Tony Brannini, “How can lack of supply chain visibility put your own business at risk”, theinnovationenterprise.com, january 15th 2018, [Online] . Available: https://channels.theinnovationenterprise.com/articles/how-can-lack-of-supply-chain-visibility-put-your-business-at-risk [Accessed at: may 27th 2018]
Anne-Francoise Cutting-Decelle, “A review of aproaches to suply chain” itcon.org, may 2015, [Online]. Available: https://www.itcon.org/papers/2007_5.content.06399.pdf [Accessed at: june 2nd 2018] 
Lucas Spindel,“Supply chain currency risks”, thebossmagazine.com, january 2018, [Online]. Available: https://thebossmagazine.com/supply-chain-currency-risks/ [Accessed at: june 2nd 2018]
Mark Johnson ,“Blockchain and the supply chain”, Digitialist, january 2018, [Online]. Available:  ,https://webforms.ey.com/Publication/vwLUAssets/ey-blockchain-and-the-supply-chain-three/$FILE/ey-blockchain-and-the-supply-chain-three.pdf [Accessed at: june 2nd 2018]
